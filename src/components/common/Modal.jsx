import React from 'react';
import './index.scss';
export const Modal = ({close}) =>{
    return(
        <div className='main_modal'>
        <div className='modal'>
            <input className='button button_close' onClick={()=>close(false)} type='button' value='Close'/>
        </div>
      </div>
    )
}