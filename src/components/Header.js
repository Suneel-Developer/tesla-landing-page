import React from 'react'
import Logo from "../assets/logo_black.webp"

const Header = () => {
    return (
        <header className='bg-[#f9fbff] h-[60px] rounded-[15px]'>
            <div className='flex items-center justify-between px-[10px] w-full h-full'>

                {/* -------------------- */}
                <img src={Logo} alt="Tesla black logo" />

                {/* ------------------------- */}
                <nav className='hidden xmd:flex items-center gap-[35px]'>
                    <a href="#giveaway" className='text-[#ff0039] text-[15px] font-bold leading-[120%] transition-colors duration-200 hover:text-[#ff0039]'>Giveaway</a>
                    <a href="#rules" className='text-[#474747] text-[15px] font-bold leading-[120%] transition-colors duration-200 hover:text-[#ff0039]'>Info</a>
                    <a href="#rules" className='text-[#474747] text-[15px] font-bold leading-[120%] transition-colors duration-200 hover:text-[#ff0039]'>Instruction</a>
                    <a href="#participate" className='text-[#474747] text-[15px] font-bold leading-[120%] transition-colors duration-200 hover:text-[#ff0039]'>Participate</a>
                    <a href="#transactions" className='text-[#474747] text-[15px] font-bold leading-[120%] transition-colors duration-200 hover:text-[#ff0039]'>Transactions</a>
                </nav>

                {/* -------------------------------- */}

                <a href="#participate" className='bg-[#ff0039] rounded-xl h-10 px-[22px] text-white font-bold leading-[120%] hidden xsm:flex items-center transition-opacity duration-200 hover:opacity-75'>Participate →</a>
            </div>
        </header>
    )
}

export default Header 