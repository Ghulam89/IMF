import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { GiFClef } from 'react-icons/gi'
import { GoGift } from 'react-icons/go'

const DonateNow = () => {
  return (
    <div>

        <div className='container  tw-pt-12 tw-flex  tw-justify-between'>
            <div>

            </div>
            <div>
                <div className=' tw-bg-[#ECECEC]  tw-flex  border tw-rounded-md'>
                    <input  placeholder="Sponsor's Referral Code" className=' tw-outline-none  tw-px-8 tw-w-72 tw-bg-[#F8F8F8]' />
                    <button className=" tw-px-6 tw-text-center  tw-py-3    tw-flex tw-items-center tw-justify-center tw-gap-1  tw-bg-[#054776] tw-text-white"> <GoGift color="white" size={20} />Donate Now</button>
 
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default DonateNow
