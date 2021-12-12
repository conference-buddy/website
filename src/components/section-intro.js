import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import MouseScrollIcon from "./mouse-scroll-icon";

function IntroSection() {
  return (
    <div className="IntroSection IntroSection-fullscreen-bg bg-clip-ellipse">
      <div className="container d-flex align-items-center p-content-section ">
        <div className="text-center text-light">
          <StaticImage
            className="IntroSection-logo"
            src="../images/LogoConferenceBuddy.png"
            alt="Conference Buddy Logo"
          />
          <h1 className="IntroSection-logo-font">
            <strong>Conference Buddy</strong>
          </h1>
          <div className="lead py-2 px-3">
            <p>
              Conference Buddy is for everyone who wants to attend a tech
              conference but is <strong>afraid to go alone</strong>. It's for
              everyone at tech events who is{" "}
              <strong>not comfortable being on their own</strong> all the time.
              It’s for <strong>all you</strong> first-timers, Introverts,
              socially awkwards, timid and shy people out there who are just
              like me!
            </p>
          </div>
        </div>
      </div>
      <div className="IntroSection-mouse-scroll-wrapper">
        <MouseScrollIcon onPageLinkId="onPageLinkId-section-about" />
      </div>
    </div>
  );
}

export default IntroSection;
