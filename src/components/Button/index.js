import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {
  const {
    children,
    outline,
    clear,
    as = 'button',
    variant = '',
    ...inheritedProps
  } = props
  const classes = ['button']
  const Component = as

  if (outline) classes.push('button-outline')
  if (clear) classes.push('button-clear')

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <Component className={classString} {...inheritedProps}>
      {children}
    </Component>
  )
}

Heading.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  as: PropTypes.string,
  outline: PropTypes.bool,
  clear: PropTypes.bool
}

export default Heading
