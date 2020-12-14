import React from 'react'
import './SideNav.css'

function SideNav() {
    return (
        
            <nav id="mySideNav" className="sideNav">
            <img className="profile_img" src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"/>
            <p>John Doe</p>
            <div className="nav_divider_top"></div>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">My Collection</a>
            <a href="#">Profile</a>
            <div className="nav_divider_bottom"></div>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Log out</a>


        </nav>
        
    )
}

export default SideNav
