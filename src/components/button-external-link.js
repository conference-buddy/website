import React from 'react'
import PropTypes from 'prop-types'

const ButtonExternalLink = ({
  url,
  children,
  additionalClassNames,
  primary,
  secondary,
  small,
}) => {
  const btnCustomClass = small ? 'btn-custom-small' : 'btn-custom'
  const primaryClass = primary ? ' btn-primary' : ''
  const secondaryClass = secondary ? ' btn-secondary' : ''

  return (
    <a
      className={`btn ${btnCustomClass}${primaryClass}${secondaryClass}`}
      href={url}
    >
      {children}
    </a>
  )
}

export default ButtonExternalLink

ButtonExternalLink.propTypes = {
  children: PropTypes.any.isRequired,
  url: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
}
