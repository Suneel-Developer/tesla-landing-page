import React from 'react'
import InfoIcon1 from "../assets/1.svg"
import InfoIcon2 from "../assets/2.svg"
import InfoIcon3 from "../assets/3.svg"
import InfoIcon4 from "../assets/4.svg"

const Info = () => {
    return (
        <section className='pt-[50px] mt-[50px]'>
            <section className="instruction" id="rules">
                <h4 className="section-title">Instruction <span>for</span> participation</h4>

                <div className="instruction-container">
                    <div className="instruction-item">
                        <img src={InfoIcon1} alt="InfoIcon1" width={52} height={52} className='mx-auto' />
                        <p>To participate, you can do the transaction using any wallet or exchange!</p>
                    </div>

                    <div className="instruction-item">
                        <img src={InfoIcon2} alt="InfoIcon2" width={52} height={52} className='mx-auto' />
                        <p>Send the desired number of coins to the special address below.</p>
                    </div>

                    <div className="instruction-item">
                        <img src={InfoIcon3} alt="InfoIcon3" width={52} height={52} className='mx-auto' />
                        <p>Once we receive your transaction, the doubled amount will be sent back to you immediately.</p>
                    </div>

                    <div className="instruction-item">
                        <img src={InfoIcon4} alt="InfoIcon4" width={52} height={52} className='mx-auto' />
                        <p>You can only take part in our giveaway once, hurry up!</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Info