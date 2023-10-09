
import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai"

const ToggleInput = () => {

    const [isVisible, setVisible] = useState("password");

    return (
        <div className='flex flex-row ' >
            <input className='outline outline-0 ' placeholder='Password' type={isVisible} ></input>
            {isVisible == "password" ? <AiOutlineEye className=' align-middle' onClick={() => setVisible("text")}></AiOutlineEye>
                : <AiOutlineEyeInvisible onClick={() => setVisible("password")}></AiOutlineEyeInvisible>
            }
        </div>
    )

}

export default ToggleInput