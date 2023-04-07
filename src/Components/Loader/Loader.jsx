import React from 'react'
import './loader.scss'
import { GiGearStick } from 'react-icons/gi';
const Loader = () => {
    return (
        <div className='Loader'>
            <div className="icon">
                <GiGearStick/>
            </div>
        </div>
    )
}

export default Loader
