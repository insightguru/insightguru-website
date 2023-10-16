import { Outlet, Link, NavLink } from "react-router-dom";
import "../../styles/Home.css";
import Logo from "../../../assets/main-logo.jpeg";
// import IguruWidget from "./IguruWidget";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

function Navbar() {

    let [Login,setLogin] = useState(true);

  return (
    <>
      {/* //navbar is here  */}
      <div className="Navbar">
        <div className="Nav_logo">
          <Link to="/">
            <img src={Logo} alt="Nav_logo_Image" />
          </Link>
        </div>



        {
            Login
            ?
        <div className="NavProfile">
          <p className="profile_email">test1@mailinator.com</p>
          <div className="profile_photo">
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
           :
        <div class="dropdown">
            <button class="dropbtn">menu <IoMdArrowDropdown className="Navbar_menu_arrow" /></button>
            <div class="dropdown-content">
                <NavLink to='/contact' className='Nav_Links' activeClassName="active">contact</NavLink>
                <NavLink to='https://staging.insightguru.com/sign-in' className='Nav_Links' activeClassName="active">sign-in</NavLink>
                <NavLink to='https://staging.insightguru.com/sign-on/' className='Nav_Links' activeClassName="active">sign-on</NavLink>
            </div>
        </div>
        }


      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
