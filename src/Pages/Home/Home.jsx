import React from 'react'
import MainSlider from '../../Components/MainSlider/MainSlider'
import MotorSport from '../../Components/MotorSport/MotorSport'
import Progress from '../../Components/Progress/Progress'
import Section1 from '../../Components/Section1/Section1'
import './home.scss'
const Home = () => {
    return (
        <div className='Home'>
            <MainSlider/>
            <Section1/>
            <Progress/>
            <MotorSport/>
        </div>
    )
}

export default Home
