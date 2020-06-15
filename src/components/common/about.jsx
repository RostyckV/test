import React from 'react';
import {Link} from 'react-router-dom';

export const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <div>
                <Link to='/contact'>Contact</Link><br/>
                <Link to='/'>Home</Link>
            </div>
            <span>ber</span>
        </div>
    )
};