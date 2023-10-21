
import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"

const ToggleInput = ({inputValue,setinputValue}) => {

    const [isVisible, setVisible] = useState("password");

    return (
        <div className='flex flex-row ' >
            <input value={inputValue} onChange={(e)=>setinputValue(e.target.value)}
            className='outline outline-0 w-full h-full ' placeholder='Password' type={isVisible} ></input>
            {isVisible == "password" ? <AiOutlineEye className=' align-middle hover:cursor-pointer' onClick={() => setVisible("text")}></AiOutlineEye>
                : <AiOutlineEyeInvisible className='hover:cursor-pointer' onClick={() => setVisible("password")}></AiOutlineEyeInvisible>
            }
        </div>
    )

}

export default ToggleInput