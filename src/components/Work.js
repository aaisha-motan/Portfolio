import React from 'react';

// motion
import { motion } from 'framer-motion'

//varients
import { fadeIn } from '../variants'

// portfolio img 
import Img1 from '../assets/portfolio-img4.png';
import Img2 from '../assets/portfolio-img5.png';
const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          whileInView={'show'}
            viewport={{
              once: false, amount: 0.3
            }} 
          className='flex-1 flex flex-col gap-y-12 mb-13 lg:mb-0'>
            {/*text*/}
            <div>
              <h2 style={{ color: '#e54575' }} className='h2 leading-tight '>My Latest <br /> Work</h2>
              <p className='max-w-sm mb-16'>
                Lorem Ipsum has been the industry\'s
                standard dummy text ever since the 1500s,
                when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/30 w-full h-full absolute z-40
            transition-all duration-300'>
                {/*overlay*/}
              </div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img2} alt='' />
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
             transition-all duration-300 z-50'>
                <span className='text-gradient'>UI UX Design</span>
              </div>
              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
             transition-all duration-500 z-50'
              ><span className='text-3xl text-white'>
                  Project Title</span></div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial="hidden" 
          whileInView={'show'}
            viewport={{
              once: false, amount: 0.3
            }} 
          className='flex-1 flex flex-col mt-8 gap-y-10'>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/30 w-full h-full absolute z-40
            transition-all duration-300'>
                {/*overlay*/}
              </div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img2} alt='' />
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
             transition-all duration-300 z-50'>
                <span className='text-gradient'>UI UX Design</span>
              </div>
              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
             transition-all duration-500 z-50'
              ><span className='text-3xl text-white'>
                  Project Title</span></div>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/30 w-full h-full absolute z-40
          transition-all duration-300'>
                {/*overlay*/}
              </div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img1} alt='' />
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
          transition-all duration-300 z-50'>
                <span className='text-gradient'>UI UX Design</span>
              </div>
              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-500 z-50'
              ><span className='text-3xl text-white'>
                  Project Title</span></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>);
};

export default Work;
