import React, { useState } from 'react'

const CountPrize = () => {
    const [btcInput, setBtcInput] = useState('1');
    const [ethInput, setEthInput] = useState('2');

    // Function to handle input changes
    const handleBtcChange = (e) => {
        setBtcInput(e.target.value);
    };

    const handleEthChange = (e) => {
        setEthInput(e.target.value);
    };

    // Calculate results
    const btcResult = btcInput ? (parseFloat(btcInput) * 2).toFixed(0) : 0;
    const ethResult = ethInput ? (parseFloat(ethInput) * 2).toFixed(0) : 0;

    return (
        <section className='pt-[50px] mt-[30px]'>
            <h4 className="section-title">Count <span>your</span> prize</h4>

            <div className="calculator-container">
                <div className="calculator-block">
                    <div className="calculator-item">
                        <p className="calculator-label">You will send <span>BTC</span></p>
                        <label className="calculator-input">
                            <input
                                type="text"
                                name="input"
                                value={btcInput}
                                onChange={handleBtcChange}
                                placeholder="1" />

                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5533 8.02636C15.3542 5.85151 13.6392 5.13005 11.4765 4.93229L11.465 1.91441L9.79016 1.92238L9.80155 4.86077C9.36122 4.86276 8.91125 4.8744 8.46408 4.88624L8.45304 1.92834L6.77919 1.93604L6.79018 4.95309C6.42769 4.9629 6.07154 4.97202 5.72437 4.9738L5.72412 4.96436L3.4142 4.97406L3.42215 6.93605C3.42215 6.93605 4.65882 6.90457 4.63838 6.92951C5.31666 6.92657 5.53917 7.35761 5.60496 7.73004L5.61821 11.1681C5.66497 11.1681 5.72604 11.1699 5.79532 11.1801C5.73945 11.1805 5.67991 11.1804 5.61836 11.1813L5.63634 15.9977C5.60757 16.232 5.48351 16.606 5.00951 16.6091C5.0311 16.6297 3.79211 16.6144 3.79211 16.6144L3.46765 18.8098L5.64723 18.7997C6.05285 18.7984 6.45195 18.8041 6.84385 18.8049L6.85627 21.8572L8.52928 21.8497L8.51759 18.8297C8.97704 18.838 9.42149 18.8399 9.8556 18.8376L9.86636 21.8436L11.5413 21.8356L11.53 18.7887C14.3451 18.5986 16.3128 17.8116 16.5463 14.9101C16.7349 12.5739 15.7295 11.5366 14.1296 11.123C15.0986 10.5761 15.7021 9.61779 15.5539 8.02644L15.5533 8.02636ZM13.2351 14.5636C13.2447 16.8446 9.68291 16.6016 8.54784 16.608L8.53281 12.5639C9.66817 12.559 13.2261 12.1845 13.2351 14.5636ZM12.4342 8.86149C12.4417 10.9367 9.47115 10.7082 8.52569 10.7126L8.51179 7.0449C9.45725 7.0405 12.4257 6.69717 12.4342 8.86149Z" fill="#FF0039"></path></svg>
                        </label>
                    </div>
                    <p className="calculator-delimiter">X</p>
                    <div className="calculator-item">
                        <p className="calculator-label">Your profit</p>
                        <div className="calculator-counter">
                            <span>200%</span>
                        </div>
                    </div>
                    <p className="calculator-delimiter">=</p>
                    <div className="calculator-item red">
                        <p className="calculator-label red">You receive</p>
                        <div className="calculator-counter">
                            <span>{btcResult}</span>
                            <svg width="29" height="41" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7618 12.8847C26.3296 8.5805 22.6068 7.15268 17.9123 6.7613L17.8872 0.788697L14.2517 0.804468L14.2764 6.61975C13.3205 6.62369 12.3438 6.64672 11.3731 6.67015L11.3491 0.816257L7.71569 0.831487L7.73956 6.80246C6.95269 6.82188 6.17958 6.83991 5.42597 6.84344L5.42545 6.82476L0.411259 6.84396L0.428522 10.7269C0.428522 10.7269 3.11297 10.6646 3.0686 10.7139C4.54095 10.7081 5.02397 11.5612 5.16677 12.2982L5.19555 19.1024C5.29704 19.1024 5.4296 19.1061 5.57999 19.1262C5.45872 19.1269 5.32948 19.1268 5.19587 19.1286L5.23489 28.6605C5.17244 29.1242 4.90315 29.8645 3.87423 29.8704C3.9211 29.9114 1.23159 29.881 1.23159 29.881L0.527292 34.2259L5.25854 34.2058C6.13902 34.2033 7.00535 34.2147 7.85605 34.2162L7.88302 40.2569L11.5146 40.2421L11.4893 34.2652C12.4866 34.2817 13.4514 34.2855 14.3937 34.2808L14.4171 40.23L18.0528 40.2142L18.0284 34.1842C24.1392 33.8079 28.4105 32.2504 28.9174 26.5081C29.3268 21.8847 27.1442 19.8317 23.6714 19.0131C25.7748 17.9308 27.0848 16.0342 26.7631 12.8848L26.7618 12.8847ZM21.7296 25.8224C21.7505 30.3367 14.0189 29.8557 11.5549 29.8684L11.5223 21.8647C13.9868 21.8551 21.71 21.1139 21.7296 25.8224ZM19.9912 14.5375C20.0074 18.6444 13.5592 18.1923 11.5069 18.201L11.4767 10.9423C13.529 10.9336 19.9727 10.2541 19.9912 14.5375Z" fill="#FF0039"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="calculator-block">
                    <div className="calculator-item">
                        <p className="calculator-label">You will send <span>ETH</span></p>
                        <label className="calculator-input">
                            <input
                                type="text"
                                name="input"
                                value={ethInput}
                                onChange={handleEthChange}
                                placeholder="2" />

                            <svg width="344" height="560" viewBox="0 0 344 560" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M171.881 0L168.124 12.7616V383.042L171.881 386.791L343.758 285.193L171.881 0Z" fill="#FF0039"></path><path d="M171.881 0L0 285.193L171.881 386.791V207.067V0Z" fill="#FF0039"></path><path d="M171.881 419.333L169.764 421.915V553.814L171.881 559.996L343.863 317.787L171.881 419.333Z" fill="#FF0039"></path><path d="M171.881 559.996V419.333L0 317.787L171.881 559.996Z" fill="#FF0039"></path><path d="M171.881 386.791L343.758 285.193L171.881 207.067V386.791Z" fill="#FF0039"></path><path d="M0 285.193L171.881 386.791V207.067L0 285.193Z" fill="#FF0039"></path></svg>
                        </label>
                    </div>
                    <p className="calculator-delimiter">X</p>
                    <div className="calculator-item">
                        <p className="calculator-label">Your profit</p>
                        <div className="calculator-counter">
                            <span>200%</span>
                        </div>
                    </div>
                    <p className="calculator-delimiter">=</p>
                    <div className="calculator-item red">
                        <p className="calculator-label red">You receive</p>
                        <div className="calculator-counter">
                            <span>{ethResult}</span>
                            <svg width="344" height="560" viewBox="0 0 344 560" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M171.881 0L168.124 12.7616V383.042L171.881 386.791L343.758 285.193L171.881 0Z" fill="#FF0039"></path><path d="M171.881 0L0 285.193L171.881 386.791V207.067V0Z" fill="#FF0039"></path><path d="M171.881 419.333L169.764 421.915V553.814L171.881 559.996L343.863 317.787L171.881 419.333Z" fill="#FF0039"></path><path d="M171.881 559.996V419.333L0 317.787L171.881 559.996Z" fill="#FF0039"></path><path d="M171.881 386.791L343.758 285.193L171.881 207.067V386.791Z" fill="#FF0039"></path><path d="M0 285.193L171.881 386.791V207.067L0 285.193Z" fill="#FF0039"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountPrize