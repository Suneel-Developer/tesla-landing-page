import React from 'react'
import Celebrate from "../assets/celebrate.webp"

const Information = () => {
    return (
        <section className='mt-[50px] pt-[50px]'>
            <h4 className="section-title">Rules <span>&amp;</span> Information</h4>

            {/* ----------------- */}
            <div className="rules-container">
                <div className="rules-item">
                    <p className="rules-title">
                        <span>About</span> giveaway
                        <img src={Celebrate} alt="Celebrate" classNameName='hidden sm:block' />
                    </p>

                    <p className="rules-subtitle">
                        We believe that <abbr><span>BTC</span> &amp; <span>ETH</span> &amp; <span>SOL</span> &amp; <span>DOGE</span></abbr> will make the world more fair. To speed up the process of cryptocurrency mass adoption, we decided to run <abbr><span>1,000 BTC</span> &amp; <span>10,000 ETH</span> &amp; <span>500,000 SOL</span> &amp; <span>100,000,000 DOGE</span></abbr> giveaway for all crypto holders!
                    </p>
                </div>

                <div className="rules-item">
                    <p className="rules-title"><span>How</span> to participate ?</p>
                    <p className="rules-subtitle">
                        To participate you just need to send any amount from <abbr>(<span>0.1 BTC</span> to <span>15 BTC</span>) or (<span>1 ETH</span> to <span>200 ETH</span>) or (<span>10 SOL</span> to <span>10,000 SOL</span>) or (<span>20,000 DOGE</span> to <span>5,000,000 DOGE</span>)</abbr> to the contribution address, and we will immediately send back the double amount <abbr>(<span>0.2 BTC</span> to <span>30 BTC</span>) or (<span>2 ETH</span> to <span>400 ETH</span>) or (<span>20 SOL</span> to <span>20,000 SOL</span>) or (<span>40,000 DOGE</span> to <span>10,000,000 DOGE</span>)</abbr> (<span>x2</span>) to the address you sent it from
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Information