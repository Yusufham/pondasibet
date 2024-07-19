import React from 'react';
import './ButtonGroup.css';


function ButtonGroup({buttons, isSelected, setIsSelected}) {
    return (
        <div className='navbar-container'>
            <div className='logo-nav'>
                <p><i>ha<span>ham-ha</span>sh</i></p>
            </div>
            <div className='button-container'>
            {
                buttons.map((text, index)=> {
                    return(
                        <button className={isSelected == index ? "buttons1" : 'buttons2'} 
                        onClick={()=>setIsSelected(index)}
                        >{text}</button>
                    ) 
                })
            }
            </div>
        </div>
    )
}

export default ButtonGroup;