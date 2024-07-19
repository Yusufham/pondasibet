import React from 'react';
import './ButtonGroup1.css'


function ButtonGroup1({buttons1, isSelected1, setIsSelected1}) {
    return (
        <div className='buttongroup1'>
            <div className='container-buttongroup1'>
                <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'>daftar disini</a>
            </div>
            <div  className='container-buttongroup1-cara'>
            {
                buttons1.map((text, index)=> {
                    return(
                        <button className={isSelected1 == index ? "buttonscomp1" : 'buttonscomp11'} 
                        onClick={()=>setIsSelected1(index)}
                        >{text}</button>
                    ) 
                })
            }
            </div>
        </div>
    )
}

export default ButtonGroup1;