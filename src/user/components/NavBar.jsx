import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/RiM-Logo.png'
import userLogo from '../assets/user-logo.png'
import '../components/NavBar.css'
import Propic from "../assets/profile-pic.png";
import hamburger from '../assets/hamburger.png'

const NavBar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width when window is resized
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLoginClick = () => {
    toggleDropdown()
    navigate('')
  }
  const handleProfileClick = () => {
    toggleDropdown()
    navigate('/user/pages/ProfileInfo')
  }
  const handleDistributorsClick = () => {
    toggleDropdown()
    navigate('/user/pages/StoreDetails')
  }


  // const handleSignupClick = () => {
  //   toggleDropdown()
  //   navigate('/user/pages/OrderHistory')
  // }

  return (
    <nav>
     
  {screenWidth > 768 ? (
     <div className='nav-1'>
     <p className='nav-para'> <i className="bi bi-geo-alt-fill" style={{ color: 'red' }}></i> Location</p>
     <img className='logo' src={logo} alt="" />
     <div className='user-dropdown'>
       <img className='userLogo' src={userLogo} alt="" onClick={toggleDropdown} />
       {isDropdownOpen && (
         <div className='dropdown-menu'>
           <a href="/user/pages/ProfileInfo" onClick={handleProfileClick}>Profile</a>
           <a href="/user/pages/OrderHistory">Orders</a>
           <a href="/user/pages/StoreDetails" onClick={handleDistributorsClick}>Distributors</a>
           <a href="#">Logout</a>
         </div>
       )}
     </div>
   </div>
  ) : (
    <div className="Mob-nav">
    <div>
       <img src={hamburger} alt="" />{/* <i class="bi bi-arrow-left-short"></i> */}
    </div>
    <div>My cart</div>
    <div>
      <img src={Propic} alt="Profile" />
    </div>
  </div>
  )}

     
    </nav>
  )
}

export default NavBar