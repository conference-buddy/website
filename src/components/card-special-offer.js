import React from 'react'
import PropTypes from 'prop-types'

const CardSpecialOffer = ({ title, subtitle, children, disclaimerText }) => {
  const cardTitle = title ? (
    <h3 className="card-title text-secondary text-center pb-2">
      🔥 {title} 🔥
    </h3>
  ) : null
  const cardSubtitle = subtitle ? (
    <h6 className="card-subtitle mb-2 text-muted ">{subtitle}</h6>
  ) : null

  const disclaimerSection = disclaimerText ? (
    <div className="card-footer text-muted small">
      <span className="text-secondary">(*) Please note:</span> {disclaimerText}
    </div>
  ) : null
  return (
    <div className="card bg-light shadow-sm m-md-2">
      <div className="card-body">
        {cardTitle}
        {cardSubtitle}
        {children}
      </div>
      {disclaimerSection}
    </div>
  )
}

CardSpecialOffer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  disclaimerText: PropTypes.string,
}

export default CardSpecialOffer
