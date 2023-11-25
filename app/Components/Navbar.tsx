import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { FaTiktok } from 'react-icons/fa';
import { LuShoppingBag } from "react-icons/lu";

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
        <div className='align-middle' style={{'color': 'white', 'display': 'flex',
            'alignItems': 'center',} }><FaTwitter/></div>
            <div className='align-middle' style={{'color': 'white', 'display': 'flex',
                'alignItems': 'center',} }><FaTiktok/></div>
        <div className='align-middle' style={{'color': 'white', 'display': 'flex',
            'alignItems': 'center',} }><FaInstagram/></div>
        <div className='align-middle' style={{'color': 'white', 'display': 'flex',
            'alignItems': 'center',} }><GoPerson/></div>
        <div className='align-middle' style={{'color': 'white', 'display': 'flex',
            'alignItems': 'center',} }><IoSearchSharp/></div>
        <div className='align-middle' style={{'color': 'white', 'display': 'flex',
            'alignItems': 'center',} }><LuShoppingBag/></div>

    </div>
    </div>
    </>
  )
}

export default Navbar
