import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onAdd }) => {
  return (
    <header>
        <h1>{title}</h1>
        <Button color='green' text='Add Food' onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Nutritional App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
