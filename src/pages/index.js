import React from "react";
// eslint-disable-next-line no-unused-vars
import Layout from "./../components/layout/index";
import IntroSection from "./../components/section-intro";
import AboutSection from "./../components/section-about";
import ConfBuddy20Section from "./../components/section-confbuddy-20";

const IndexPage = () => {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ConfBuddy20Section />
    </div>
  );
};

export default IndexPage;
