import React from 'react';
// motion
import { motion } from 'framer-motion'

//varients
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:section ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          whileInView={'show'}
            viewport={{
              once: false, amount: 0.3
            }} 
          className='flex-1 flex justify-start items-center'>
            {/*text*/}
            <div>
              <h4 style={{ color: '#e54575' }}
                className='text-xl uppercase  font-medium font-bold mb-2 tracking-wide' >Get In Touch!</h4>

              <h2 style={{ color: '#ff8478 ' }} className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br /> Together</h2>
            </div>
          </motion.div>
          <form className='flex-1'>
            {/* form */}
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-[#e54575] focus:border-red-500 border-b-2 transition-all'
              type='text'
              placeholder='Your Name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-[#e54575] focus:border-red-500 border-b-2 transition-all'
              type='text'
              placeholder='Your Email'
            />
            <textarea
              placeholder='Your Message'
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-[#e54575] focus:border-red-500 border-b-2 transition-all resize-none mb-12'
            ></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </form>


        </div>

      </div>
    </section>
  );
};

export default Contact;
