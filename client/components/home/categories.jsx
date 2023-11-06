import React from 'react'
import { GiSmartphone } from 'react-icons/gi'
import { RiComputerLine, RiGamepadLine } from "react-icons/ri"
import { BsSmartwatch } from "react-icons/bs"
import { AiOutlineCamera } from "react-icons/ai"
import { CiHeadphones } from "react-icons/ci"
const Catgories = () => {
    return (
        <div className=''>
            <span className='text-4xl font-semibold mx-2'>Browse By Category</span>
            <div className='text-8xl flex flex-row m-3     '>
                <div className='mx-3 p-3 border-1 border-black mr-2 rounded flex flex-col w-full h-full justify-center'>
                    <GiSmartphone className='w-full ' ></GiSmartphone>
                    <span className='text-base  flex justify-center'>Phones</span>
                </div>
                <div className='mx-3 p-3 border-1 border-black mr-2 rounded flex flex-col w-full h-full justify-center'>
                    <RiComputerLine className='w-full ' ></RiComputerLine>
                    <span className='text-base  flex justify-center'>Computer</span>
                </div>
                <div className='mx-3 p-3 border-1 border-black mr-2 rounded flex flex-col w-full h-full justify-center'>
                    <BsSmartwatch className='w-full ' ></BsSmartwatch>
                    <span className='text-base  flex justify-center'>Watch</span>
                </div>
                <div className='mx-3 p-3 border-1 border-black mr-2 rounded flex flex-col w-full h-full justify-center'>
                    <CiHeadphones className='w-full ' ></CiHeadphones>
                    <span className='text-base  flex justify-center'>Headphones</span>
                </div>
                <div className='mx-3 p-3 border-1 border-black mr-2 rounded flex flex-col w-full h-full justify-center'>
                    <AiOutlineCamera className='w-full ' ></AiOutlineCamera>
                    <span className='text-base  flex justify-center'>Camera</span>
                </div>
                <div className='ml-3 p-3 border-1 border-black mr-2 rounded flex flex-col w-full h-full justify-center'>
                    <RiGamepadLine className='w-full ' ></RiGamepadLine>
                    <span className='text-base  flex justify-center'>Game</span>
                </div>
                {/* <RiComputerLine className='border-1 border-black mx-4 rounded p-8 w-full h-full ' />
                <BsSmartwatch className='border-1 border-black mx-4 rounded p-8 w-full h-full ' />
                <AiOutlineCamera className='border-1 border-black mx-4 rounded p-8 w-full h-full ' />
                <CiHeadphones className='border-1 border-black mx-4 rounded p-8 w-full h-full ' />
                <RiGamepadLine className='border-1 border-black mx-4 rounded p-8 w-full h-full ' /> */}
            </div>
        </div>
    )
}

export default Catgories