import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { FaTiktok } from 'react-icons/fa';
import { LuShoppingBag } from "react-icons/lu";
import { IconContext } from "react-icons";

const Navbar = () => {
    const divStyle = {
        height: '80px',
        backgroundColor: '#212122',
        fontSize: '13px',
        fontWeight: 'bold',
        FontFace: 'Roboto'
    };

    const whiteColor = {
        color: 'white'
    }

    const iconStyle={'color': 'white', 'display': 'flex',
    'alignItems': 'center',} 

    
  return (
    <>
    <div style={divStyle} className='flex justify-between'>
   <nav className='flex space-x-6 align' style={{'display': 'flex',
            'alignItems': 'center',   marginLeft: '40px'}}>
        <ul className='flex space-x-6'>
            <li style={whiteColor}>brands</li>
            <li style={whiteColor}>shop</li>
            <li style={whiteColor}>premuium</li>
            <li style={whiteColor}>gift cards</li>
        </ul>
    </nav>
    <div className='flex space-x-6'>
        <div style={{
            // center the text vertically in the navbar
            'display': 'flex',
            'alignItems': 'center',
            'color': '#fee96e',
            'fontSize': '40px',
            'fontWeight': 'bold',
            'fontFamily': 'autumn'
        }}>brava</div>
    </div>
    <div className='flex space-x-4 align-middle' style={{'marginRight': "30px"}}>
        <div style={{'color': 'white', 'display': 'flex', 'fontWeight': 'bold',
            'alignItems': 'center',}}>become an affiliate </div>
            {/* <IconContext.Provider value={{ className: "shared-class", size: '70' }}>
             <> */}
  
                <div style={iconStyle }><FaTwitter size='15px'/></div>
                <div style={iconStyle }><FaTiktok size="17px"/></div>
                <div style={iconStyle }><FaInstagram size="18px"/></div>
                <div style={iconStyle }><GoPerson size="20px"/></div>
                <div style={iconStyle }><IoSearchSharp size="20px"/></div>
                <div className='thb-tem' style={iconStyle}>
                <div style={iconStyle}><LuShoppingBag size="20px"/></div>
                <span className="thb-item-count">0</span>
                </div>
            {/* </>
            </IconContext.Provider> */}
    </div>
    </div>
    </>
  )
}

export default Navbar
