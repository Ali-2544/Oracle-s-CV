import "../app/globals.css"
import React from 'react'
import Skill from "@/compnents/organisms/Skill"
import Cards from "@/app/compnents/organisms/Cards"
import Banner from '@/compnents/organisms/Banner'
import Header from '@/compnents/organisms/Header'
import AboutMe from '@/compnents/organisms/AboutMe'
import Portfolio from "@/compnents/organisms/Portfolio"

function Home() {
    return (
        <div className='flex  flex-col gap-[50px] ' >
            <div className="d">
                <Header />
            </div>
            <div className="container   ">
                <Banner />
            </div>
            <div className="pt-[50px]" id="card">
                <Cards />
            </div>
            <div className="container" id='about_me'>
                <AboutMe />
            </div>
            <div id="skill" className="pt-[100px]">
                <Skill />
            </div>
            <div id="Portfolio">
                <Portfolio />
            </div>
        </div>
    )
}

export default Home;

