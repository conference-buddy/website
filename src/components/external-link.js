import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ url, children, primary, secondary }) => {
  const primaryClass = primary ? 'TextLink-primary' : ''
  const secondaryClass = secondary ? 'TextLink-secondary' : ''

  return (
    <a href={url} className={`TextLink ${primaryClass} ${secondaryClass}`}>
      {children}
    </a>
  )
}

export default ExternalLink

ExternalLink.propTypes = {
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  url: PropTypes.string.isRequired,
}
