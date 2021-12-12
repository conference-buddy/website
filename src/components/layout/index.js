import React from "react";
import PropTypes from "prop-types";
import ScrollToTop from "react-scroll-up";
import { FaCaretSquareUp } from "react-icons/fa";
import Header from "../header";
import Footer from "../footer";
import "./../../scss/main.scss";

const ogImage = "https://i.imgur.com/aOqP2xB.jpg";

export default function Layout({ children }) {
  return (
    <div>
      <head>
        <title>Conference Buddy</title>
        <meta name="title" content="Conference Buddy" />
        <meta
          name="description"
          content="Conference Buddy is for everyone who wants to attend a tech conference but is afraid to go alone. It's for everyone at conferences  who is not comfortable being on their own all the time.  Let's make tech events more approachable!"
        />
        <meta name="image" content={ogImage} />
        <meta
          name="keywords"
          content="tech conference, conference, tech events, programming, developing, programmer, developer, software development, software engineering, open space, barcamp, meetup, coding, coding conference"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Mirjam Bäuerlein" />

        <meta itemprop="name" content="Conference Buddy" />
        <meta
          itemprop="description"
          content="Conference Buddy is for everyone who wants to attend a tech conference but is afraid to go alone. It's for everyone at conferences  who is not comfortable being on their own all the time.  Let's make tech events more approachable!"
        />
        <meta itemprop="image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conference Buddy" />
        <meta
          name="twitter:description"
          content="Conference Buddy is for everyone who wants to attend a tech conference but is afraid to go alone. It's for everyone at conferences  who is not comfortable being on their own all the time.  Let's make tech events more approachable!"
        />
        <meta name="twitter:site" content="@ConfBuddy" />
        <meta name="twitter:creator" content="@mirjam_diala" />
        <meta name="twitter:image" content={ogImage} />

        <meta name="og:title" content="Conference Buddy" />
        <meta
          name="og:description"
          content="Conference Buddy is for everyone who wants to attend a tech conference but is afraid to go alone. It's for everyone at conferences  who is not comfortable being on their own all the time.  Let's make tech events more approachable!"
        />
        <meta name="og:image" content={ogImage} />
        <meta name="og:url" content="https://www.conferencebuddy.io/" />
        <meta name="og:site_name" content="Conference Buddy" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />

        <link rel="canonical" href={`https://conferencebuddy.io/`} />
      </head>

      <Header siteTitle={"Conference Buddy"} />

      <main>{children}</main>
      <Footer />
      <ScrollToTop
        showUnder={180}
        style={{
          bottom: 15,
          right: 15,
          opacity: 0.5,
        }}
      >
        <FaCaretSquareUp
          size={"2em"}
          className="text-dark"
          style={{ opacity: "0.5" }}
        />
      </ScrollToTop>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
