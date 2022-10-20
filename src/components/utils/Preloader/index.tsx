import React from 'react'
import gif from '../../../assets/images/preloader.gif'

const Preloader:React.FC = () => {
    return (
        <img className='preloader' src={gif} alt="preloader" />
    )
}

export default Preloader