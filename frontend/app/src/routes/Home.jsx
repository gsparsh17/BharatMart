import React from 'react'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import MyComponents from '../components/MyComponents'
import './Home.css'

function Home() {
  return (
    <div className='home absolute mt-16 w-full'>
        <LandingPage/>
        <About/>
        <MyComponents/>
    </div>
  )
}

export default Home