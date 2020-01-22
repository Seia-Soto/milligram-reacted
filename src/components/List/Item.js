import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {
  const {
    children,
    description,
    descriptionHeader,
    as = 'li',
    variant = '',
    ...inheritedProps
  } = props

  let Component = as

  if (description) {
    Component = 'dd'
  } else if (descriptionHeader) {
    Component = 'dt'
  }

  return (
    <Component className={variant} {...inheritedProps}>
      {children}
    </Component>
  )
}

Heading.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  as: PropTypes.string,
  descriptionHeader: PropTypes.bool,
  description: PropTypes.bool
}

export default Heading
