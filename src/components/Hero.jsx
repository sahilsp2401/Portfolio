import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assests/Sahil.jpg"
import { motion } from "framer-motion"

// const container = (delay)=>({
//     hidden:{x:-100, opacity:0},
//     visible:{
//         x:0,
//         opacity:1,
//         transition:{duration:0.5,delay:delay}
//     }
// })
// variants={container(0.5)} initial="hidden" animate="visible"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:0}} className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Sahil Sapkal</motion.h1>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:0.5}}  className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl
                    tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:1}} className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:1.2}} className='h-96' src={profilePic} alt="Sahil Sapkal" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero