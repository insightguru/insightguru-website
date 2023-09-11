import { Outlet, Link, NavLink } from "react-router-dom";
import '../../styles/Home.css'
import Logo from '../../../assets/main-logo.png'
import IguruWidget from "./IguruWidget";




function Navbar() {

    return (
        <>

            {/* //navbar is here  */}
            <div className="Navbar">
                <div className="Nav_logo">
                    <Link to='/'><img src={Logo} alt="Nav_logo_Image" /></Link>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">menu</button>
                    <div class="dropdown-content">
                        <NavLink to='/contact' className='Nav_Links' activeClassName="active">contact</NavLink>
                        {/* <NavLink to='/contact' className='Nav_Links' activeClassName="active">sign-in</NavLink>
                        <NavLink to='/contact' className='Nav_Links' activeClassName="active">sign-on</NavLink> */}
                        <IguruWidget />
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Navbar
