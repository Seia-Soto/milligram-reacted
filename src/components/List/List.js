import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {
  const {
    children,
    unordered,
    description,
    as = 'ol',
    variant = '',
    ...inheritedProps
  } = props

  let Component = as

  if (unordered) Component = 'ul'
  if (description) Component = 'dl'

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
  unordered: PropTypes.bool,
  description: PropTypes.bool
}

export default Heading
