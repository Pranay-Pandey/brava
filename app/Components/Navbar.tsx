'use client';
import React from 'react';
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IoSearchSharp } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';

const Navbar = () => {
  const iconStyle = {
    color: 'white',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    transition: 'color 0.3s', // Add a smooth transition effect
  };


  return (
    <>
      <div style={{ height: '80px', backgroundColor: '#212122', fontSize: '13px', fontWeight: 'bold', fontFamily: 'Roboto' }} className='flex justify-between'>
        <nav className='flex space-x-6 align' style={{ 'display': 'flex', 'alignItems': 'center', marginLeft: '40px' }}>
          <ul className='flex space-x-6'>
            <li style={{ color: 'white' }}>brands</li>
            <li style={{ color: 'white' }}>shop</li>
            <li style={{ color: 'white' }}>premuium</li>
            <li style={{ color: 'white' }}>gift cards</li>
          </ul>
        </nav>
        <div className='flex space-x-6'>
          <div style={{ 'display': 'flex', 'alignItems': 'center', 'color': '#fee96e', 'fontSize': '40px', 'fontWeight': 'bold', 'fontFamily': 'autumn', }}>brava</div>
        </div>
        <div className='flex space-x-4 align-middle' style={{ 'marginRight': '30px' }}>
          <div className='underline-text'
            style={{ display: 'flex',
            fontWeight: 'bold',
            alignItems: 'center',
            transition: 'color 0.3s',
        color: 'white', }
        }    
          >
            become an affiliate
          </div>
          <div
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <FaTwitter size='15px' />
          </div>
          <div style={iconStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')} onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
            <FaTiktok size="17px" />
          </div>
          <div style={iconStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')} onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
            <FaInstagram size="18px" />
          </div>
          <div style={iconStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')} onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
            <GoPerson size="20px" />
          </div>
          <div style={iconStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')} onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
            <IoSearchSharp size="20px" />
          </div>
          <div className='thb-tem' style={iconStyle}>
            <div style={iconStyle} onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')} onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
              <LuShoppingBag size="20px" />
            </div>
            <span className="thb-item-count">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
