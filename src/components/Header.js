import React from 'react';
import Logo from '../assets/icon.png'

const Header = () => {
  return (
  <header className='py-8'>
  <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
      {/* Logo */}
      <a href='#'>
        <img  src={Logo} alt='' height='200' width='200'/>
      </a>
      {/* Logo */}
      <button className='btn btn-sm'> Let's Work Along!</button>
    </div>

  </div>
  
  </header>);
};

export default Header;
