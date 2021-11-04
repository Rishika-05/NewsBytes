import React from 'react'
// import PropTypes from 'prop-types'
import loading from '../images/ajax-loader.gif'

const Spinner = () => {

        return (
            <div className='text-center my-3 mb-5'>
                <img src={loading} alt="loading" />
            </div>
        )
}

export default Spinner