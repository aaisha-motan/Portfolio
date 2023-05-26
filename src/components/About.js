import React from 'react';

//count up
import CountUp from 'react-countup';

// intersection observer
import { useInView } from 'react-intersection-observer';

// farmer motion

import { motion } from 'framer-motion';

// variations

import { fadeIn } from '../variants';
const About = () => {

  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className='section' id='about' ref={ref}>

      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
           variants={fadeIn('right', 0.3)} 
           initial="hidden" 
           whileInView={'show'}
             viewport={{
               once: false, amount: 0.3
             }}  
          className='flex-1 bg-about bg-contain bg-no-repeat
         h-[680px] mix-blend-lighten bg-top'></motion.div>
            {/*img */}

            {/*text*/}
                <motion.div 
                 variants={fadeIn('left', 0.3)} 
                 initial="hidden" 
                 whileInView={'show'}
                   viewport={{
                     once: false, amount: 0.7
                   }} 
                
                className='flex-1'>
                  <h2 style={{ color: '#e54575' }} className='h2'>
                    About Me.
                  </h2>
                  <h3 className='h3 mb-4'>I am a Software Developer with over 7 years of experience</h3>
                  <p className='mb-6'> Hey there! I'm a versatile software developer
                    with expertise in a wide range of frameworks,
                    languages, and tools. I specialize in creating
                    dynamic and user-friendly applications using React,
                    Flutter, .NET for Windows Application Development,
                    Flask, and Express.js.</p>
              {/*stats*/}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div >
                  <div className='text-[40px] font-tertiary text-gradient'>
                    {
                      inView ?
                        <CountUp start={0} end={13} duration={3} />
                        : null
                    }
                  </div>
                  <div className='font-primary text-sm tracking-2px'>
                    Years of <br /> Experience
                  </div>
                </div>

                <div >
                  <div className='text-[40px] font-tertiary text-gradient'>
                    {
                      inView ?
                        <CountUp start={0} end={15} duration={3} />
                        : null
                    }
                    K+
                  </div>
                  <div className='font-primary text-sm tracking-2px'>
                    Projects <br /> Completed
                  </div>
                </div>

                <div >
                  <div className='text-[40px] font-tertiary text-gradient'>
                    {
                      inView ?
                        <CountUp start={0} end={12} duration={3} />
                        : null
                    }
                    K+
                  </div>
                  <div className='font-primary text-sm tracking-2px'>
                    Satisfied <br /> Clients
                  </div>
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact Me!</button>
                <a href='#' className='text-gradient btn-link'> My Portfoltio</a>
              </div>

            </motion.div>
          

        </div>
      </div>
    </section>
  );
};

export default About;
