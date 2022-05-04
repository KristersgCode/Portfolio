import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import PortfolioSection from '../components/PortfolioSection';
import ResumeSection from '../components/Resume';
import Sidebar from '../Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }  //Toggling true false / true false

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <ResumeSection />
            <PortfolioSection />
        </>
    )
}

export default Home