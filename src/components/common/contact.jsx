import React from 'react';
import {Link} from 'react-router-dom';

export const Contact = () =>{
    return(
        <div>
            <h1>Contact</h1>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
};