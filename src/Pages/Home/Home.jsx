import React from 'react'
import OurServices from '../../components/OurServices/OurServices'
import BlogAndNews from '../../components/BlogAndNews/BlogAndNews'
import Footer from '../../components/Footer/Footer'
import LogosComponents from '../../components/LogosComponents/LogosComponents'
import NavBar from '../../components/NavBar/NavBar'


function Home() {
    return (
        <>
            <NavBar/>
            <LogosComponents/>
            <OurServices/>
            <BlogAndNews/>
            <Footer/>
        </>
    )
}

export default Home
