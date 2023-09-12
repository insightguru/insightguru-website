import { Outlet, Link, NavLink } from "react-router-dom";
import '../../styles/Home.css'
import Logo from '../../../assets/main-logo.png'
// import IguruWidget from "./IguruWidget";
import { IoMdArrowDropdown } from 'react-icons/io';





function Navbar() {

    return (
        <>

            {/* //navbar is here  */}
            <div className="Navbar">
                <div className="Nav_logo">
                    <Link to='/'><img src={Logo} alt="Nav_logo_Image" /></Link>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">menu <IoMdArrowDropdown className="Navbar_menu_arrow" /></button>
                    <div class="dropdown-content">
                        <NavLink to='/contact' className='Nav_Links' activeClassName="active">contact</NavLink>
                        <NavLink to='https://staging.insightguru.com/sign-in' className='Nav_Links' activeClassName="active">sign-in</NavLink>
                        <NavLink to='https://staging.insightguru.com/sign-on/' className='Nav_Links' activeClassName="active">sign-on</NavLink>
                        {/* <IguruWidget /> */}
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Navbar
