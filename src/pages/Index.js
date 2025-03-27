import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/headers/header";
import Hero from "../components/call-to-action/hero";
import Name from "../components/features/name";
import Origins from "../components/call-to-action/origins";
import Purpose from "../components/how-it-works/purpose";
import Values from "../components/__structures/values";
import Logos from "../components/call-to-action/logos";
import Colors from "../components/call-to-action/colors";
import Type from "../components/pricing/type";
import Photography from "../components/__structures/photography";
import Icons from "../components/application/icons";
import Illustrations from "../components/team/illustrations";
import Assets from "../components/team/assets";
import DataVisualization from "../components/call-to-action/dataVisualization";
import UIElements from "../components/sign-in/uiElements";
import Writing from "../components/call-to-action/writing";

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
