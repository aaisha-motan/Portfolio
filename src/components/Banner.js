import React from 'react';
// Avatar img
import Image from '../assets/WHEEL (2).png';

// icons
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

// typeanimaton
import { TypeAnimation } from 'react-type-animation';

// motion
import { motion } from 'framer-motion';

//variants

import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[80vh] lg:min-h-[70vh] flex items-center' id='home'>
      <div className='container mx-auto lg:-mt-50'>
        <div className='flex flex-col gap-y-8 lg:flex-row  lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
              viewport={{
                once: false, amount: 0.7
              }} 
              className='text-5xl font-bold leading-[0.8] lg:text-7xl'>
             <span>Daniel</span> <span>Aly</span>
            </motion.h1>
            <motion.div 
            
             variants={fadeIn('up', 0.4)} 
             initial="hidden" 
             whileInView={'show'}
               viewport={{
                 once: false, amount: 0.7
               }} 
            
            className='mb-4 text-2xl lg:text-4xl font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>
                I am a
              </span>
              <TypeAnimation
                sequence={[
                  
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                style={{ color: '#e54575' }}
                speed={50}
               
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
             variants={fadeIn('up', 0.5)} 
             initial="hidden" 
             whileInView={'show'}
               viewport={{
                 once: false, amount: 0.7
               }} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Hey there! I'm a versatile software developer
              with expertise in a wide range of frameworks,
              languages, and tools. I specialize in creating
              dynamic and user-friendly applications using React,
              Flutter, .NET for Windows Application Development,
              Flask, and Express.js. In terms of programming languages, I am fluent in TypeScript,
              JavaScript, HTML, CSS, Dart, C++, and Python.
            </motion.p>

            <motion.div 
             variants={fadeIn('up', 0.6)} 
             initial="hidden" 
             whileInView={'show'}
               viewport={{
                 once: false, amount: 0.7
               }} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                Contact Me
              </button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            <motion.div 
             variants={fadeIn('up', 0.7)} 
             initial="hidden" 
             whileInView={'show'}
               viewport={{
                 once: false, amount: 0.7
               }} 
            className='flex text-2xl gap-x-6 max-w-max m-auto lg:mx-0 '>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div 
           variants={fadeIn('down', 0.5)} 
           initial="hidden" 
           whileInView={'show'}
           
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[800px] '>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
