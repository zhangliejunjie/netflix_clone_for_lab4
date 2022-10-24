import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FilmModal = ({ image, title, year, active, nation, handleClick }) => {

    return active ? (
        <div className='item-modal'>
            <a href="#">
                <img
                    src={image}
                    alt="Describe Image" />
                <h1 className="title">{title}</h1>
                <p className="year">{year}</p>
                <p className='nation'>{nation}</p>
                <button onClick={handleClick}>Close</button>
            </a>
        </div>
    ) : null
}

FilmModal.propTypes = {
    active: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    nation: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default FilmModal