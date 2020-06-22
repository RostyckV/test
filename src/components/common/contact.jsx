import React from 'react';
import {Link} from 'react-router-dom';
export const Contact = () =>{
    return(
        <div>
            <div className='pages'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/toDoList'>To Do List</Link>
                <Link className='link' to='/signup'>Sign Up</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/about'>About</Link>
            </div>
            <h2>Contact</h2>
            <p>Lviv, street I.Franka 61</p>
            <span>tel: (067) 990-37-93 <br/>
            tel: (032) 242-777-2 <br/>
            tel: 0 (800) 309-777</span>
            <p>Еmail: info.lgs.lviv@gmail.com</p>
            <p>Skype: logos_lviv</p>
        </div>
    )
};