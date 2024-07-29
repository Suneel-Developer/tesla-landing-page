import React, { useState, useEffect } from 'react';
import "../App.css";

const Transication = () => {
    const rowDataSets = [
        [
            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1ivRdlK6nYNy0K49tQxuEeiZdu9vCkRfuNCG4...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '0.69 BTC<br>0.34 BTC',
                status: 'Completed'
            },
            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: '0xawtYXxAd7gZ18mTxsG4QrPde9SUiWyLwGfqgv...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                value: '344895.33 DOGE<br>172447.66 DOGE',
                status: 'Completed'
            },
            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: 'bc1Lk7eT5i4lKmJofnLwnuphNFZNNu5sJsETNxJ...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                value: '60.94 SOL<br>30.47 SOL',
                status: 'Completed'
            },
            {
                hash: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                from: '0xMDLmghAINXqh2vUW3O2INjGWy9wLXcjfmdgWr...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'bc1iaP3HymBs7w9sisOFimjf7QpOrIazHjeFyEn...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                value: '0.47 BTC<br>0.24 BTC',
                status: 'Completed'
            },
            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '11.06 ETH<br>5.53 ETH',
                status: 'Completed'
            }
        ],

        [
            {
                hash: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                from: '0xMDLmghAINXqh2vUW3O2INjGWy9wLXcjfmdgWr...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'bc1iaP3HymBs7w9sisOFimjf7QpOrIazHjeFyEn...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                value: '0.47 BTC<br>0.24 BTC',
                status: 'Completed'
            },
            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '11.06 ETH<br>5.53 ETH',
                status: 'Completed'
            },

            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: 'bc1Lk7eT5i4lKmJofnLwnuphNFZNNu5sJsETNxJ...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                value: '60.94 SOL<br>30.47 SOL',
                status: 'Completed'
            },

            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1ivRdlK6nYNy0K49tQxuEeiZdu9vCkRfuNCG4...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '0.69 BTC<br>0.34 BTC',
                status: 'Completed'
            },
            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: '0xawtYXxAd7gZ18mTxsG4QrPde9SUiWyLwGfqgv...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                value: '344895.33 DOGE<br>172447.66 DOGE',
                status: 'Completed'
            },


        ],

        [

            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '11.06 ETH<br>5.53 ETH',
                status: 'Completed'
            },

            {
                hash: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                from: '0xMDLmghAINXqh2vUW3O2INjGWy9wLXcjfmdgWr...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'bc1iaP3HymBs7w9sisOFimjf7QpOrIazHjeFyEn...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                value: '0.47 BTC<br>0.24 BTC',
                status: 'Completed'
            },

            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1ivRdlK6nYNy0K49tQxuEeiZdu9vCkRfuNCG4...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '0.69 BTC<br>0.34 BTC',
                status: 'Completed'
            },
            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: '0xawtYXxAd7gZ18mTxsG4QrPde9SUiWyLwGfqgv...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                value: '344895.33 DOGE<br>172447.66 DOGE',
                status: 'Completed'
            },

            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: 'bc1Lk7eT5i4lKmJofnLwnuphNFZNNu5sJsETNxJ...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                value: '60.94 SOL<br>30.47 SOL',
                status: 'Completed'
            },


        ],

        [
            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1ivRdlK6nYNy0K49tQxuEeiZdu9vCkRfuNCG4...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '0.69 BTC<br>0.34 BTC',
                status: 'Completed'
            },


            {
                hash: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                from: '0xMDLmghAINXqh2vUW3O2INjGWy9wLXcjfmdgWr...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'bc1iaP3HymBs7w9sisOFimjf7QpOrIazHjeFyEn...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                value: '0.47 BTC<br>0.24 BTC',
                status: 'Completed'
            },

            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '11.06 ETH<br>5.53 ETH',
                status: 'Completed'
            },

            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: 'bc1Lk7eT5i4lKmJofnLwnuphNFZNNu5sJsETNxJ...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                value: '60.94 SOL<br>30.47 SOL',
                status: 'Completed'
            },


            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: '0xawtYXxAd7gZ18mTxsG4QrPde9SUiWyLwGfqgv...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                value: '344895.33 DOGE<br>172447.66 DOGE',
                status: 'Completed'
            },




        ],

        [

            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '11.06 ETH<br>5.53 ETH',
                status: 'Completed'
            },
            {
                hash: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1ivRdlK6nYNy0K49tQxuEeiZdu9vCkRfuNCG4...',
                from: 'bc1gSBStQSWcdAMzxhvPQoougadAQvwFfTZABkE...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                value: '0.69 BTC<br>0.34 BTC',
                status: 'Completed'
            },





            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: 'bc1Lk7eT5i4lKmJofnLwnuphNFZNNu5sJsETNxJ...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                to: '1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs<br>bc1lfsSyHMxgsaQ1DX4QbZPwetB4Q7MuvbkDesv...',
                value: '60.94 SOL<br>30.47 SOL',
                status: 'Completed'
            },

            {
                hash: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                from: '0xMDLmghAINXqh2vUW3O2INjGWy9wLXcjfmdgWr...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'bc1iaP3HymBs7w9sisOFimjf7QpOrIazHjeFyEn...<br>1D9n9x1XUBwegcKAVEYhtLurpBaGQA7Qrs',
                value: '0.47 BTC<br>0.24 BTC',
                status: 'Completed'
            },


            {
                hash: '0x627c20f01fef2cadab013ef728a958233b34737e<br>0xro2JJzCtTuKM4K7LTpiaCrH5ucy0Zx71EQILr...',
                from: '0xawtYXxAd7gZ18mTxsG4QrPde9SUiWyLwGfqgv...<br>0x627c20f01fef2cadab013ef728a958233b34737e',
                to: 'G5iCHCL7oDUB1MkdCzXFnF6MJUMyrxTwpqsiz4mtLxZm<br>RRWNl1IV0my7QdbcNrfCVEvHb4Hlqq7KzC79LUc0v6Lt...',
                value: '344895.33 DOGE<br>172447.66 DOGE',
                status: 'Completed'
            },




        ],

    ];

    const [currentIndexes, setCurrentIndexes] = useState(Array(rowDataSets.length).fill(0));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndexes(prevIndexes =>
                prevIndexes.map((index, rowIndex) => (index + 1) % rowDataSets[rowIndex].length)
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='pt-[50px] mt-5 w-full' id='transactions'>
            <div className="transactions-container">
                <table>
                    <thead>
                        <tr>
                            <th>Hash</th>
                            <th>From</th>
                            <th></th>
                            <th>To</th>
                            <th>Value</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rowDataSets.map((dataSets, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <p className="txhash" dangerouslySetInnerHTML={{ __html: dataSets[currentIndexes[rowIndex]].hash }}></p>
                                </td>
                                <td>
                                    <p className="address" dangerouslySetInnerHTML={{ __html: dataSets[currentIndexes[rowIndex]].from }}></p>
                                </td>
                                <td className="arrow">
                                    <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.7991 0.741779C31.1813 0.122853 30.1788 0.121786 29.5609 0.739154L10.5712 19.6787L3.71982 12.2374C3.1278 11.5948 2.12686 11.5531 1.48316 12.145C0.839952 12.737 0.798772 13.7385 1.39079 14.3817L9.35816 23.0344C9.64995 23.3516 10.0583 23.5357 10.4889 23.5447C10.5004 23.5452 10.5116 23.5452 10.5227 23.5452C10.9411 23.5452 11.3436 23.379 11.6402 23.0835L31.796 2.98049C32.4154 2.36321 32.4165 1.3607 31.7991 0.741779Z" fill="#ff0039"></path>
                                    </svg>
                                </td>
                                <td>
                                    <p className="address" dangerouslySetInnerHTML={{ __html: dataSets[currentIndexes[rowIndex]].to }}></p>
                                </td>
                                <td>
                                    <p className="value" dangerouslySetInnerHTML={{ __html: dataSets[currentIndexes[rowIndex]].value }}></p>
                                </td>
                                <td>
                                    <p className="status">{dataSets[currentIndexes[rowIndex]].status}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Transication;
