import React from "react";
import PropTypes from "prop-types";

function scrollTo(event, elementId) {
  event.preventDefault();
  const element = document.getElementById(elementId);
  element.scrollIntoView();
}

const MouseScrollIcon = ({ onPageLinkId }) => {
  return (
    <div className="MouseScrollIcon d-none d-sm-block">
      <a href={onPageLinkId} onClick={(event) => scrollTo(event, onPageLinkId)}>
        <span className="MouseScrollIcon-mouse">
          <span className="MouseScrollIcon-wheel" />
        </span>
      </a>
    </div>
  );
};

export default MouseScrollIcon;

MouseScrollIcon.propTypes = {
  onPageLinkId: PropTypes.string.isRequired,
};
