import React, { useState } from 'react'
import Tikmark from "../assets/red-tikmark.svg"
import WaitingIcon from "../assets/waitingicon.svg"
import Bitcoin from "../assets/bitcoin.png"
import Eth from "../assets/eth.png"
import Sol from "../assets/sol.png"
import Doge from "../assets/doge.png"

const Participate = () => {
    const [copiedAddress, setCopiedAddress] = useState(null);
    const [showTikmark, setShowTikmark] = useState(null);

    const handleCopyAddress = (address, index) => {
        navigator.clipboard.writeText(address).then(() => {
            setCopiedAddress(index);
            setShowTikmark(index);
            setTimeout(() => setShowTikmark(null), 5000);
        }).catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <section className='mt-[50px] pt-[50px]' id='participate'>
            <h4 className="section-title">Participate <span>in</span> giveaway</h4>

            <div className='participate-container'>
                {[
                    { img: Bitcoin, title: 'BTC', address: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs' },
                    { img: Eth, title: 'ETH', address: '0x627c20f01fef2cadab013ef728a958233b34737e' },
                    { img: Sol, title: 'SOL', address: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm' },
                    { img: Doge, title: 'DOG', address: 'DBzppqZTujwFV1SXCUnCTJs7PpKijHgL3j' }
                ].map((item, index) => (
                    <div className='participate-item' key={index}>
                        <img src={item.img} alt={item.title} className='participate-qr' />

                        <div className='participate-data'>
                            <p className='participate-title'>
                                Send your <span>{item.title}</span> to the address for X2 back
                            </p>

                            <div className='participate-address'>
                                <p>{item.address}</p>
                                {showTikmark === index && (
                                    <img src={Tikmark} alt="Tikmark" className='address-done' />
                                )}
                            </div>

                            <div className='participate-footer'>
                                <button
                                    type="button"
                                    className='participate-button'
                                    onClick={() => handleCopyAddress(item.address, index)}
                                >
                                    Copy address
                                </button>
                                <div className='participate-status'>
                                    <img src={WaitingIcon} alt="WaitingIcon" />
                                    <p>Waiting for payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Participate