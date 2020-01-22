import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {
  const {
    children,
    as = 'h1',
    variant = '',
    ...inheritedProps
  } = props
  const Component = as

  return (
    <Component className={variant} {...inheritedProps}>
      {children}
    </Component>
  )
}

Heading.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  as: PropTypes.string
}

export default Heading
