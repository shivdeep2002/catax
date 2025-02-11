import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaAngleDoubleRight, FaAngleDown, FaArrowDown, FaCalendarAlt } from 'react-icons/fa';
import { FaRightLeft } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';

function Deposite({ closeFilterModal, modalTransition }) {
    const [deposit, setDeposit] = useState("Deposit")
    const [transactionType, setTransactionType] = useState('Deposit');
    const [startDate, setStartDate] = useState(null);
    const [clickElements, setClickElement] = useState([false, false, false, false]);
    const elements = ['+ TxHash', '+ TxSrc', '+ Tag', '+ Description'];
    const [selectWallet, setSelectWallet] = useState("Select Wallet")
    const [selectWallettype, setSelectWallettype] = useState("Select Wallet")
    const [selectCoin, setSelectCoin] = useState('coin')
    const [selectCoinType , setSelectCoinType] = useState('coin')


    const handleClick = (index) => {
        const newClickElement = [...clickElements];
        newClickElement[index] = true;
        setClickElement(newClickElement);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);

    };
    const handleDeposit = () => {
        setDeposit(!deposit)
    }


    const handleTransactionChange = (type) => {

        setTransactionType(type);
    };

    const handleSelectWallet = () => {
        setSelectWallet(!selectWallet)
    }

    const handleSelectWallettype = (type) => {
        setSelectWallettype(type)
    }
    const handleSelectWalletChange = (type) => {
        setSelectWallettype(type)
    }
    const handleSelectCoin = () => {
        setSelectCoin(!selectCoin)
    }
    const coinType = (type) =>{
        setSelectCoinType(type)
    }
    const handleCoinChange = (Type) =>{
        setSelectCoinType(Type)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div
                className="absolute inset-0 bg-black/50 opacity-75"
                onClick={closeFilterModal} // Ensure this function is passed in as a prop or defined in the component
            ></div>

            <div className={`z-10 ml-auto h-[90vh] w-1/2 rounded-md bg-white relative  ${modalTransition}`}>
                <div className="max-h-[80vh] overflow-y-auto">
                    <div className="rounded-t-md bg-[#A54D79] p-5  shadow-sm flex justify-between">
                        <h1 className='text-sm text-white font-semibold'>Add Transaction</h1>
                        <span className=' text-white '><IoCloseSharp className='text-xl font-bold' /></span>
                    </div>
                    <div className="w-full">
                        <div className="px-4">
                            <p className="px-5 py-2 text-sm  text-[#5C5C5C]">
                                When you receive coins from somewhere ex. purchase, airdrop, mining, income etc
                            </p>

                            {/* Invoice Available Toggle */}


                            {/* Wallets */}
                            {/* <div className="flex flex-col space-y-2 px-5 py-2">
                        <label htmlFor="wallets">Type of transaction</label>
                        <div
                            onClick={handleDeposit}

                            className="w-full rounded border py-2 cursor-pointer hover:bg-gray-100"
                        >
                            <div className='flex items-center justify-between px-2  gap-2'>
                                <div className="flex gap-2 items-center ">
                                    <FaArrowDown className='text-[#3FBB00]' />
                                    <span>Deposit</span>
                                </div>
                                <div>
                                    <FaAngleDown />
                                </div>
                            </div>
                        </div>
                        {deposit && (
                            <div className="flex flex-col bg-[#FAFAFA] border absolute w-[94%] top-[174px]">
                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]'>
                                    <div className="flex gap-2 items-center">
                                        <FaArrowDown className='text-[#3FBB00]' />
                                        <span>Deposit</span>
                                    </div>


                                </div>
                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]'>
                                    <div className="flex gap-2 items-center">
                                        <FaRightLeft className=' text-[#35BAF6]' />
                                        <span>Trade</span>
                                    </div>


                                </div>
                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]'>
                                    <div className="flex gap-2 items-center">
                                        <FaAngleDoubleRight className='text-[#A54D79]' />
                                        <span>Transfer</span>
                                    </div>




                                </div>

                                
                            </div>
                            

                        )}
                    </div> */}
                            <div className="flex flex-col bg-[#FAFAFA] border ">
                                <div onClick={handleDeposit} className='flex items-center justify-between p-2 gap-2 mt-1 '>
                                    <div className="flex gap-2 items-center">
                                        {transactionType === 'Deposit' ? (
                                            <>
                                                <FaArrowDown className='text-[#3FBB00]' />
                                                <span>{transactionType}</span>
                                            </>
                                        ) : transactionType === 'Trade' ? (
                                            <>
                                                <FaRightLeft className='text-[#35BAF6]' />
                                                <span>{transactionType}</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaAngleDoubleRight className='text-[#A54D79]' />
                                                <span>{transactionType}</span>
                                            </>
                                        )}
                                    </div>
                                    <div>
                                        <FaAngleDown />
                                    </div>
                                </div>
                                {deposit && (
                                    <div className="border absolute w-[93%] top-[145px] bg-[#FAFAFA]">
                                        <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleTransactionChange('Deposit')}>
                                            <div className="flex gap-2 items-center">
                                                <FaArrowDown className='text-[#3FBB00]' />
                                                <span>Deposit</span>
                                            </div>

                                        </div>
                                        <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleTransactionChange('Trade')}>
                                            <div className="flex gap-2 items-center">
                                                <FaRightLeft className='text-[#35BAF6]' />
                                                <span>Trade</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleTransactionChange('Transfer')}>
                                            <div className="flex gap-2 items-center">
                                                <FaAngleDoubleRight className='text-[#A54D79]' />
                                                <span>Transfer</span>
                                            </div>

                                        </div>
                                    </div>
                                )}

                            </div>


                            <div className="flex flex-col space-y-2 px-5 py-2">
                                {/* <label htmlFor="">
                            <span className='text-sm'>Date </span>
                            <span className='text-xs text-[#989898]'>(UTC)</span>
                        </label> */}
                                {/* <div className="w-full rounded border py-1">
                            <div className='flex items-center gap-2'>
                            <CiCalendar />
                            <span className='text-sm text-[#989898]'>Select Date</span>
                                
                            </div>
                            
                        </div> */}

                            </div>

                            <div className="">
                                <span>Date </span>
                                <span className='text-[#959595]'>(UTC)</span>
                            </div>
                            <div className="date-range-container flex items-center ">
                                <label htmlFor="">

                                </label>
                                <div className=" z-10 flex items-center border w-full rounded-md px-2 ">
                                    <FaCalendarAlt className=" text-gray-500" />
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        selectsStart
                                        startDate={startDate}

                                        placeholderText="Select Date"
                                        className="outline-none w-full py-1 pl-4"
                                    />
                                </div>



                            </div>


                            <div className="w-full py-3 my-6 space-y-2 border px-4">
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <FaArrowDown className='text-[#3FBB00]' />
                                        <span className='font-semibold'>Received</span>
                                    </div>
                                </div>
                                <div className="flex flex-col  bg-[#FAFAFA] border ">
                                    <div onClick={handleSelectWallet} className='flex items-center justify-between p-2 gap-2 mt-1 '>
                                        <div className="flex gap-2 items-center">
                                            {selectWallettype === 'Kraken (2)' ? (
                                                <>
                                                    <img className='h-6' src="/reward.png" alt="" />
                                                    <span>{selectWallettype}</span>
                                                </>
                                            ) : selectWallettype === 'CoinDCX' ? (
                                                <>
                                                    <img className='h-6' src="/reward.png" alt="" />
                                                    <span>{selectWallettype}</span>
                                                </>
                                            ) : (
                                                <>

                                                    <img className='h-6' src="/reward.png" alt="" />
                                                    <span>{selectWallettype}</span>
                                                </>
                                            )}
                                        </div>
                                        <div>
                                            <FaAngleDown />
                                        </div>
                                    </div>
                                    {selectWallet && (
                                        <div className="border absolute w-[87%]  top-[330px] bg-[#FAFAFA]">
                                            <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleSelectWalletChange('Kraken (2)')}>
                                                <div className="flex gap-2 items-center">
                                                <img className='h-6' src="/reward.png" alt="" />
                                                    <span>Kraken (2)</span>
                                                </div>

                                            </div>
                                            <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleSelectWalletChange('CoinDCX')}>
                                                <div className="flex gap-2 items-center">
                                                <img className='h-6' src="/reward.png" alt="" />
                                                    <span>CoinDCX</span>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleSelectWalletChange('Unocoin')}>
                                                <div className="flex gap-2 items-center">
                                                <img className='h-6' src="/reward.png" alt="" />
                                                    <span>Unocoin</span>
                                                </div>

                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col w-1/2 bg-[#FAFAFA] border ">
                                        <div onClick={handleSelectCoin} className='flex items-center justify-between p-2 gap-2 mt-1 '>
                                            <div className="flex gap-2 items-center">
                                                {selectCoinType === 'INR' ? (
                                                    <>
                                                        <span>{selectCoinType}</span>
                                                    </>
                                                ) : selectCoinType === 'USD' ? (
                                                    <>
                                                        <span>{selectCoinType}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>{selectCoinType}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                <FaAngleDown />
                                            </div>
                                        </div>
                                        {selectCoin && (
                                            <div className="border absolute w-[43%] top-[390px] bg-[#FAFAFA]">
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleCoinChange('INR')}>
                                                    <div className="flex gap-2 items-center">
                                                        <span>INR</span>
                                                    </div>

                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCoinChange('USD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <span>USD</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCoinChange('CAD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <span>CAD</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>



                                    <select name="" id="" className='bg-[#EFEFEF] w-1/2 py-2'>
                                        <option value=""> No.of Coin</option>
                                    </select>
                                </div>
                            </div>


                            <div>

                                <div className="flex flex-col gap-4">
                                    {elements.map((Data, index) => (
                                        <div key={index} className="flex flex-col gap-2">
                                            {clickElements[index] && (
                                                <div className="flex flex-col gap-2 mb-4">
                                                    {index === 0 && (
                                                        <div className="flex flex-col gap-2 mb-4">
                                                            <label htmlFor="">Transaction</label>
                                                            <select className='py-1 border' name="" id="">
                                                                <option value="">Select </option>
                                                            </select>
                                                            <label htmlFor="">Transaction Hash</label>
                                                            <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                                                        </div>
                                                    )}
                                                    {index === 1 && (<div className="flex flex-col gap-2 mb-4">
                                                        <label htmlFor="">Transaction Script</label>
                                                        <select className='py-1 border' name="" id="">
                                                            <option value="">Select </option>
                                                        </select>
                                                        <label htmlFor="">Text</label>
                                                        <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                                                    </div>
                                                    )}
                                                    {index === 2 && (<div className="flex flex-col gap-2 mb-4">
                                                        <label htmlFor="">Tag</label>
                                                        <select className='py-1 border' name="" id="">
                                                            <option value="">Select </option>
                                                        </select>
                                                        <label htmlFor="">Transaction Hash</label>
                                                        <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                                                    </div>
                                                    )}
                                                    {index === 3 && (<div className="flex flex-col gap-2 mb-4">
                                                        <label htmlFor="">Description</label>
                                                        <select className='py-1 border' name="" id="">
                                                            <option value="">Select </option>
                                                        </select>
                                                        <label htmlFor="">Text</label>
                                                        <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                                                    </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex  gap-4">
                                    {elements.map((Data, index) => (
                                        <div key={index} className="flex gap-4 items-center">
                                            {!clickElements[index] && (
                                                <div
                                                    className="border rounded-full px-2 cursor-pointer"
                                                    onClick={() => handleClick(index)}
                                                >
                                                    {Data}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <div className="flex gap-4">
                                <div className="border rounded-full space-x-2 px-2">
<span>+</span>
                                    <span>TxHash</span>
                                </div>
                                <div className="border rounded-full space-x-2 px-2">
                                    <span>+</span>
                                    <span>TxSrc</span>
                                </div>
                                <div className="border rounded-full space-x-2 px-2">
                                    <span>+</span>
                                    <span>Tag</span>
                                </div>
                                <div className="border rounded-full space-x-2 px-2">
                                    <span>+</span>
                                    <span>Description</span>
                                </div>
                            </div> */}
                            <div className="py-4 space-x-4">
                                <input type="checkbox" />
                                <label htmlFor="">Skip duplicate checks</label>
                            </div>
                            <div className="w-full py-4">
                                <button className='bg-[#A64D79] w-full text-white rounded-md py-2'>
                                    Apply
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deposite;
