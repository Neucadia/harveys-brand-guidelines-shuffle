import { defineConfig, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// Two conventions carried over from the Create React App years:
//
// 1. JSX lives in .js files. Vite 8's oxc transform picks the parser language
//    from the extension, so a .js file is parsed as plain JavaScript and the
//    first JSX tag is a syntax error. The pre-transform below runs the oxc
//    JSX transform on src/**/*.js before Vite's own transform sees them.
//    Renaming 87 files to .jsx would ripple into sync-ui, the design-sync
//    config, and the agent docs that point at src/components/ui/*.js.
//
// 2. SVG logos are imported CRA-style: `import { ReactComponent as X } from
//    "./x.svg"`. The design-sync library build (.design-sync/build-lib.mjs)
//    rewrites that exact form, so it stays; vite-plugin-svgr is configured to
//    honor it. No file imports an SVG as a URL.

const JSX_IN_JS = /\/src\/.*\.js$/;

function jsxInJs() {
  let config;
  return {
    name: "harveys:jsx-in-js",
    enforce: "pre",
    configResolved(resolved) {
      config = resolved;
    },
    async transform(code, id) {
      const [file] = id.split("?");
      if (!JSX_IN_JS.test(file) || file.includes("/node_modules/")) return;
      const result = await transformWithOxc(
        code,
        file,
        { lang: "jsx", jsx: { runtime: "automatic", development: !config.isProduction } },
        undefined,
        config
      );
      return { code: result.code, map: result.map, moduleType: "js" };
    },
  };
}

export default defineConfig({
  plugins: [
    jsxInJs(),
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: { exportType: "named", namedExport: "ReactComponent" },
    }),
  ],
  // The dev dependency scanner is rolldown without user transforms; tell it
  // the same thing so it can read imports out of the JSX-bearing .js files.
  optimizeDeps: { rolldownOptions: { moduleTypes: { ".js": "jsx" } } },
  build: { outDir: "build" },
});
