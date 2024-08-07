import React from 'react'
import logo from "../assests/sahil.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion"

const Navbar = () => {

    const handleClick = (site)=>{
        if(site==="linkedin"){
            window.open("https://www.linkedin.com/in/sahil-sapkal-23a20b240","_blank")
        }else if(site==="github"){
            window.open("https://github.com/sahilsp2401","_blank")
        }else if(site==="instagram"){
            window.open("https://www.google.com","_blank")
        }
            
    }
  return (
    <motion.nav whileInView={{opacity:1,y:0}} initial={{opacity:0}} transition={{duration:1}}  className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer'>
            <FaLinkedin onClick={()=>handleClick("linkedin")}/>
            <FaGithub onClick={()=>handleClick("github")}/>
            <FaInstagram onClick={()=>handleClick("instagram")}/>
        </div>
    </motion.nav>
  )
}

export default Navbar