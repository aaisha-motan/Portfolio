import React from 'react';

// importing icons
import { BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsBriefcase, BsClipboard, BsChat} from 'react-icons/bs';

//importing links
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'> 
      <div className='container-mx-auto'>
        {/*nave inner*/}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 
        rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2x1
        text-white/70'>
         <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200}
         className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass='active' smooth={true} spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link to='services' activeClass='active' smooth={true} spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboard />
          </Link>
          <Link to='work' activeClass='active' smooth={true} spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='contact' activeClass='active' smooth={true} spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChat />
          </Link>
        </div>

      </div>
    </nav>
  );
   
};

export default Nav;
