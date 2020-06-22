import React from 'react';
// import {Modal} from "./Modal";
import {Link} from 'react-router-dom';
import {Modal} from "./Modal";


// export const ToDoList = () =>{
export default class ToDoList extends React.Component{
    state = {
        isOpen: false
      }
      toggleModal = (open)=>{
        this.setState({isOpen:open})
      }
    render() {
    return(
        <div>
            <div className='pages'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/toDoList'>To Do List</Link>
                <Link className='link' to='/signup'>Sign Up</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/about'>About</Link>
            </div>
            <div className='container'>
            <form action="">
              <input className='search' type="search" name="" id="" placeholder='Search..'/>
              <input className='button' type="button" value="Search"/>
              <label htmlFor="">All
                <input className='checkbox' type="checkbox" name="" id=""/>
              </label>
              <label htmlFor="">Done
                <input className='checkbox' type="checkbox" name="" id=""/>
              </label>
              <label htmlFor="">Important
                <input type="checkbox" name="" id=""/>
              </label>
              <br/>
              <input className='button button_important' type="button" value="Important"/>
              <input className='button button_delete' type="button" value="Delete"/>
              <br/>
              <input className='button button_done' type="button" value="Done"/>
              <br/>
              <input onClick={()=>this.toggleModal(true)} className='button button_add' type="button" value="Add"/>
              {this.state.isOpen && <Modal close={this.toggleModal}/>}
            </form>
          </div>
        </div>
    )
    }
};