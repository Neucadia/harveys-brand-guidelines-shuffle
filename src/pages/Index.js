import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header";
import Hero from "../components/hero";
import Name from "../components/name";
import Origins from "../components/origins";
import Purpose from "../components/purpose";
import Values from "../components/values";
import Logos from "../components/logos";
import Colors from "../components/colors";
import Type from "../components/type";
import Photography from "../components/photography";
import Icons from "../components/icons";
import Illustrations from "../components/illustrations";
import Assets from "../components/assets";
import DataVisualization from "../components/dataVisualization";
import UIElements from "../components/uiElements";
import Writing from "../components/writing";

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
      <Origins />
      <Purpose />
      <Values />
      <Logos />
      <Colors />
      <Type />
      <Photography />
      <Icons />
      <Illustrations />
      <Assets />
      <DataVisualization />
      <UIElements />
      <Writing />
    </React.Fragment>
  );
}
