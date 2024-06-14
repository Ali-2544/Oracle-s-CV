import "../app/globals.css"
import React from 'react'
import Cards from "@/app/compnents/organisms/Cards"
import Banner from '@/compnents/organisms/Banner'
import Header from '@/compnents/organisms/Header'
import AboutMe from '@/compnents/organisms/AboutMe'

function Home() {
    return (
        <div className='flex  flex-col gap-[50px] ' >
            <div className="d">
                <Header />
            </div>
            <div className="container   ">
                <Banner />
            </div>
            <Cards />
            <div className="container ">
                <AboutMe />
            </div>
        </div>
    )
}

export default Home;

