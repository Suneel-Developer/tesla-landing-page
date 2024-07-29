import React from 'react'
import LogoWhite from '../assets/logo_white.webp'

const Footer = () => {
    return (
        <footer class="navigation">
            <div class="navigation-container">
                <img src={LogoWhite} alt="LogoWhite" class="navigation-logo" />
                <a href="#participate" class="navigation-button hidden xsm:flex">Participate →</a>
            </div>
        </footer>
    )
}

export default Footer