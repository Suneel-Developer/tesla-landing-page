import React from 'react'
import Creator from "../assets/creator.webp"
import TikmarkIcon from "../assets/tikmark.svg"
import RightIcon from "../assets/right-arrow.svg"
import ScanIcon from "../assets/scan.svg"

const Giveaway = () => {
    return (
        <section className='pt-[30px]' id='giveaway'>
            <div className='flex justify-between items-center h-full gap-5'>
                <div className='text-center lg:text-start w-full'>
                    {/* -------------------- */}
                    <div className="top-badge">
                        <div className="icon">
                            <img src={TikmarkIcon} alt="TikmarkIcon" width={9} height={7} />
                        </div>
                        <p>Official event</p>
                    </div>


                    {/* -------------------------- */}
                    <h1 className="top-title">Biggest CRYPTO<br /> giveaway of <span>$100,000,000</span></h1>

                    {/* --------------------------------- */}

                    <p className="top-subtitle">
                        During this unique event, you have the opportunity to take a share of <abbr><span>1,000 BTC</span> &amp; <span>10,000 ETH</span> &amp; <span>500,000 SOL</span> &amp; <span>100,000,000 DOGE</span></abbr>. Have a look at the rules and don't miss out on this. You can only participate once!
                    </p>

                    {/* --------------------------------- */}

                    <div className="top-buttons">
                        <a className="top-button button-participate" href="#participate">
                            <span>Participate</span>
                            <img src={RightIcon} alt="RightIcon" width={24} height={24} className='hidden sm:block' />
                        </a>
                        <a className="top-button button-qr" href="#participate">
                            <img src={ScanIcon} alt="ScanIcon" width={36} height={36} />
                        </a>
                    </div>
                </div>

                <img src={Creator} alt="Creator" width={500} height={500} className='hidden lg:flex' />
            </div>
        </section>
    )
}

export default Giveaway