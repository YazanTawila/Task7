import React from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactSection/ContactSection'
import ContactInformation from '../../components/ContactInformation/ContactInformation'
import NavBar2 from '../../components/NavBar2/NavBar2'
function Contact() {
    return (
        <>
            <NavBar2/>
            <AboutHero
                HeroTitle={'Contact Us'}
                HeroP={"Contact Us"}
            />
            <ContactSection/>
            <ContactInformation/>
            <Footer/>
        </>
    )
}

export default Contact
