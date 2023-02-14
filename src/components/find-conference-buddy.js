import React from "react";
import { FaGithub, FaMastodon, FaTwitter } from "react-icons/fa";
import ExternalLink from "../components/external-link";

function FindConferenceBuddy() {
  return (
    <div className="container">
      <div className="row justify-content-center">
          <ul className="list-unstyled d-flex border-top border-primary" aria-label="Where to find Conference Buddy">
            <li className="mr-3"><FaGithub aria-hidden="true" /> <ExternalLink rel="me" url="https://github.com/conference-buddy" secondary>GitHub</ExternalLink></li>
            <li className="mr-3"> <FaMastodon aria-hidden="true" /> <ExternalLink rel="me" url="https://hachyderm.io/@ConfBuddy" secondary>Mastodon</ExternalLink></li>
            <li className="mr-3"><FaTwitter aria-hidden="true" /> <ExternalLink rel="me" url="https://twitter.com/confBuddy" secondary>Twitter</ExternalLink></li>
          </ul>
      </div>
    </div>
  );
}

export default FindConferenceBuddy;
