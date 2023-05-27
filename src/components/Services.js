import React from 'react';

//icon
import { BsArrowUpRight } from 'react-icons/bs'

//motin
import { motion } from 'framer-motion';

//varients

import { fadeIn } from '../variants'

//servoces data

const services = () => [
  {
    name: 'UI/UX Design',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'Learn More',
  },
  {
    name: 'Development',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'Learn More',
  },
  {
    name: 'Q/A',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'Learn More',
  },

];


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
           variants={fadeIn('right', 0.3)} 
           initial="hidden" 
           whileInView={'show'}
             viewport={{
               once: false, amount: 0.3
             }} 
          
          className='flex-1 lg:bg-services bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 style={{ color: '#e54575' }} className='h2  mb-6'> My Expertise.</h2>
            <h3 className='h3 max-w-[455px] mb-16'> I am a Software Developer with over 7 years of experience</h3>
            <button className='btn btn-sm'> See My Work! </button>

          </motion.div>
          {/* services */}
          <motion.div
           variants={fadeIn('left', 0.5)} 
           initial="hidden" 
           whileInView={'show'}
             viewport={{
               once: false, amount: 0.3
             }} 
          className='flex-1'>
            <div>
              {services().map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white-20 h-[186px] mb-[38px] flex'
                  key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'> {description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="https://github.com" className='btn w-9 h-9 mb[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a >
                      <a href="https://github.com" className='text-gradient text-sm pt-12'>
                        {link}
                      </a >
                      </div>
                  </div>
                );
              })}
            </div>

          </motion.div>


        </div>

      </div>
    </section>
  );
};

export default Services;
