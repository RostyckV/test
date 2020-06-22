import React from 'react';
import {Link} from 'react-router-dom';
export const About = () =>{
    return(
        <div>
            <div className='pages'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/toDoList'>To Do List</Link>
                <Link className='link' to='/signup'>Sign Up</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/about'>About</Link>
            </div>
            <h2>About</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolor aperiam beatae quia saepe, optio expedita nulla officia quis! Repellat aspernatur doloribus rerum voluptas impedit expedita ab itaque illo. Dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque et impedit nisi eius necessitatibus, voluptas voluptatum cumque aut, illum ducimus enim obcaecati laboriosam voluptate praesentium. Assumenda fugiat natus necessitatibus sequi.</p>
            <h3>Our Works</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio voluptatem pariatur quod quia, voluptates nihil beatae excepturi totam voluptate et, distinctio facilis numquam suscipit labore nesciunt molestias? Hic, alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odit earum nesciunt quod distinctio, voluptates consequuntur voluptatem delectus aspernatur magnam illum rerum? Et earum quia, ratione nostrum iste modi eaque!</p>
        </div>
    )
};