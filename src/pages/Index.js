import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/headers/header";
import Hero from "../components/call-to-action/hero";
import Name from "../components/features/name";
import IndexSectionCallToAction6 from "../components/call-to-action/IndexSectionCallToAction6";
import IndexSection__structures25 from "../components/__structures/IndexSection__structures25";
import IndexSectionHowItWorks8 from "../components/how-it-works/IndexSectionHowItWorks8";
import IndexSection__structures33 from "../components/__structures/IndexSection__structures33";
import IndexSectionCallToAction10 from "../components/call-to-action/IndexSectionCallToAction10";
import IndexSectionCallToAction11 from "../components/call-to-action/IndexSectionCallToAction11";
import IndexSectionHowItWorks12 from "../components/how-it-works/IndexSectionHowItWorks12";
import IndexSectionPricing13 from "../components/pricing/IndexSectionPricing13";
import IndexSection__structures29 from "../components/__structures/IndexSection__structures29";
import IndexSection__structures28 from "../components/__structures/IndexSection__structures28";
import IndexSectionPortfolio14 from "../components/portfolio/IndexSectionPortfolio14";
import IndexSection__structures30 from "../components/__structures/IndexSection__structures30";
import IndexSectionTeam15 from "../components/team/IndexSectionTeam15";
import IndexSection__structures31 from "../components/__structures/IndexSection__structures31";
import IndexSection__structures32 from "../components/__structures/IndexSection__structures32";
import IndexSectionPortfolio26 from "../components/portfolio/IndexSectionPortfolio26";
import IndexSectionApplication16 from "../components/application/IndexSectionApplication16";
import IndexSectionTeam17 from "../components/team/IndexSectionTeam17";
import IndexSectionTeam18 from "../components/team/IndexSectionTeam18";
import IndexSectionCallToAction19 from "../components/call-to-action/IndexSectionCallToAction19";
import IndexSectionSignIn20 from "../components/sign-in/IndexSectionSignIn20";
import IndexSectionCallToAction21 from "../components/call-to-action/IndexSectionCallToAction21";
import IndexSectionPricing23 from "../components/pricing/IndexSectionPricing23";
import IndexSectionHowItWorks34 from "../components/how-it-works/IndexSectionHowItWorks34";
import IndexSectionBlog27 from "../components/blog/IndexSectionBlog27";
import IndexSectionFaq24 from "../components/faq/IndexSectionFaq24";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    let classes = document.body.classList;
    document.body.classList.remove(...classes);
    document.body.classList.add(
      ..."antialiased font-body bg-body text-body .body".split(" ")
    );
  });

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Header />
      <Hero />
      <Name />
      <IndexSectionCallToAction6 />
      <IndexSection__structures25 />
      <IndexSectionHowItWorks8 />
      <IndexSection__structures33 />
      <IndexSectionCallToAction10 />
      <IndexSectionCallToAction11 />
      <IndexSectionHowItWorks12 />
      <IndexSectionPricing13 />
      <IndexSection__structures29 />
      <IndexSection__structures28 />
      <IndexSectionPortfolio14 />
      <IndexSection__structures30 />
      <IndexSectionTeam15 />
      <IndexSection__structures31 />
      <IndexSection__structures32 />
      <IndexSectionPortfolio26 />
      <IndexSectionApplication16 />
      <IndexSectionTeam17 />
      <IndexSectionTeam18 />
      <IndexSectionCallToAction19 />
      <IndexSectionSignIn20 />
      <IndexSectionCallToAction21 />
      <IndexSectionPricing23 />
      <IndexSectionHowItWorks34 />
      <IndexSectionBlog27 />
      <IndexSectionFaq24 />
    </React.Fragment>
  );
}
