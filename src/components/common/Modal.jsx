import React from 'react';
import './index.scss';

export const Modal = ({close}) =>{
    return(
        <div className='main_modal'>
        <div className='modal'>
            <input onClick={()=>close(false)} type='button' value='close'/>
        </div>
      </div>
    )
}