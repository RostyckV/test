import React from 'react';
import {Link} from 'react-router-dom';
export const Home = () =>{
    return(
        <div>
            <div className='pages'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/toDoList'>To Do List</Link>
                <Link className='link' to='/signup'>Sign Up</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/about'>About</Link>
            </div>
            <div className='blockNews'>
                <h2>News</h2>
                <p>12.06</p>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, fugit omnis facilis esse excepturi voluptas ipsa. Molestiae non ex adipisci molestias soluta sed minus voluptatem inventore, magni nobis facere consectetur.</span>
                <p>04.06</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur illo et obcaecati ipsam! Ab, deleniti corporis quis quod fugit optio debitis et alias dolorum a iusto fuga eaque earum!</span>
                <p>23.05</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat recusandae nobis molestiae delectus eveniet voluptatem maxime illo soluta. Ab mollitia sed odio expedita neque dignissimos at similique corporis repudiandae.</span>
            </div>
        </div>
    )
};