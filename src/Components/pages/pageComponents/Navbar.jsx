import React, { useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";
import '../../styles/Home.css'
import Logo from '../../../assets/main-logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import IguruWidget from './IguruWidget';




function Navbar() {

    return (
        <>

            {/* //navbar is here  */}
            <div className="Navbar">
                <input id="Nav-Toggle" name="Nav-Toggle" className='Nav-Toggle' type="checkbox" />
                <div className="Nav_logo">
                    <Link to='/'><img src={Logo} alt="Nav_logo_Image" /></Link>
                </div>
                <div className='Navbar_Listing'>
                    <Link to='/contact' className='Nav_Links'>contact</Link>
                    <Link to='https://staging.insightguru.com/sign-in' className='Nav_Links'>sign-in</Link>
                    <Link to='https://staging.insightguru.com/sign-on/' className='Nav_Links'>sign-on</Link>
                    {/* <IguruWidget /> */}
                </div>
                <label htmlFor="Nav-Toggle" className='Hum_burger_nav_icon'><GiHamburgerMenu /> </label>
            </div>

            <Outlet />
        </>
    )
}

export default Navbar
