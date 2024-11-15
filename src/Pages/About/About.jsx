import React from 'react'

import AboutHero from '../../components/AboutHero/AboutHero'
import AfterHero from '../../components/AfterHero/AfterHero'
import TeamMembers from '../../components/TeamMembers/TeamMembers'
import EnvatoSection from '../../components/EnvatoSection/EnvatoSection'
import Footer from '../../components/Footer/Footer'
import ContactInformation from '../../components/ContactInformation/ContactInformation'
import NavBar2 from '../../components/NavBar2/NavBar2'
function About() {
    return (
        <>
            <NavBar2/>
            <AboutHero
                HeroTitle={'About Us'}
                HeroP={"About Us"}
            />
            <AfterHero/>
            <TeamMembers/>
            <EnvatoSection/>
            <ContactInformation/>
            <Footer/>
        </>
    )
}

export default About
