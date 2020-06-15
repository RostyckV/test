import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () =>{
    return(
        <div>
            <h1>Main</h1>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
};