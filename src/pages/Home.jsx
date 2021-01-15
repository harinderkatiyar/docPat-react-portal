import React from 'react'
import web from '../../src/images/img3.png'
import Common from '../layout/Common'
const Home =()=>{
    return(<><Common
    name="Project Name" 
    imgsrc={web} 
    visit='/services' 
    btnName="Get Started"/></>)
}
export default Home;