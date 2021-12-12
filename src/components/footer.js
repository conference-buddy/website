import React from "react";
import { FaUserSecret, FaHeart, FaCoffee, FaKeyboard } from "react-icons/fa";
import ExternalLink from "../components/external-link";

function Footer() {
  return (
    <footer>
      <div className="bg-light py-2 small text-center shadow-lg">
        <FaUserSecret />{" "}
        <ExternalLink
          url="https://www.iubenda.com/privacy-policy/44138766"
          primary
        >
          Privacy Policy
        </ExternalLink>
      </div>
      <div className="container-fluid small bg-gradient text-light text-center">
        Made with <FaHeart /> lots of <FaCoffee /> and an awesome <FaKeyboard />
      </div>
    </footer>
  );
}

export default Footer;
