import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FiX } from 'react-icons/fi';
import Img1 from '../assets/portfolio-img4.png';
import Img2 from '../assets/portfolio-img5.png';

const Work = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const togglePopup = (title, description, image) => {
    setShowPopup(!showPopup);
    if (showPopup) {
      setPopupData({ title: '', description: '', image: '' });
    } else {
      setPopupData({ title, description, image });
    }
  };



  return (

    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-13 lg:mb-0'
          >
            {/* Text */}
            <div>
              <h2 style={{ color: '#e54575' }} className='h2 leading-tight'>
                My Latest <br /> Work
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            {/* Image */}
            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
              onClick={() =>
                togglePopup('Project Title', 'Description 1', Img2)
              }
            >
              <div className='group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300'>
                {/* Overlay */}
              </div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50'>
                <span className='text-gradient'>UI UX Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col mt-8 gap-y-10'
          >
            {/* Image */}
            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
              onClick={() =>
                togglePopup('Project Title 2', 'Description 2', Img2)
              }
            >
              <div className='group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300'>
                {/* Overlay */}
              </div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50'>
                <span className='text-gradient'>UI UX Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title 2</span>
              </div>
            </div>
            {/* Image */}
            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
              onClick={() =>
                togglePopup('Project Title 3', 'Description 3', Img1)
              }
            >
              <div className='group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300'>
                {/* Overlay */}
              </div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt=''
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50'>
                <span className='text-gradient'>UI UX Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title 3</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-50'>
          <div className='bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-lg max-w-3x1 m-10 relative flex'>
            {/* Close Button */}
            <button
              className='absolute top-2 right-2 text-white hover:text-pink-200'
              onClick={togglePopup}
            >
              <FiX size={24} />
            </button>
            {/* Image Column */}
            <div className='w-1/2'>
              {/* Display the image */}
              <img src={popupData.image} alt='' className='mb-4' />
            </div>
            {/* Content Column */}
            <div className='w-1/2 ml-4'>
              {/* Display the title */}
              <div className='text-4xl mb-4 text-white'>{popupData.title}</div>

              {/* Display the description */}
              <div className='text-gray-600 mb-4'>{popupData.description}</div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Work;
