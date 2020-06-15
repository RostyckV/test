import React from "react";
// import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, } from 'react-router-dom';
import './index.scss';
import {About} from './about';
import {Contact} from './contact';
import {Home} from './home';
import { Modal } from "./Modal";

export default class Mainpage extends React.Component {
  state = {
    isOpen: false
  };
  toggleModal = (open)=>{
    this.setState({isOpen:open})
  };
    
    render() {
      return (
        <div>
          <header className='header'>
            <BrowserRouter>
              <Switch>
                <Route component={About} path={'./about'} />
                <Route component={Contact} path={'./contact'} />
                <Route component={Home} path={'/'} />
              </Switch>
            </BrowserRouter>
            {/* <span className='main'>To do list</span> */}
          </header>
          <div className='container'>
            <form action="">
              <input className='search' type="search" name="" id="" placeholder='Пошук'/>
              <input className='button' type="button" value="Знайти"/>
              <label htmlFor="">Всі
                <input className='checkbox' type="checkbox" name="" id=""/>
              </label>
              <label htmlFor="">Готові
                <input className='checkbox' type="checkbox" name="" id=""/>
              </label>
              <label htmlFor="">Важливі
                <input type="checkbox" name="" id=""/>
              </label>
              <br/>
              <input className='button button_important' type="button" value="Important"/>
              <input className='button button_delete' type="button" value="Delete"/>
              <br/>
              <input className='button button_done' type="button" value="Done"/>
              {/* <button>tre</button> */}
              <br/>
              <input onClick={()=>this.toggleModal(true)} className='button button_add' type="button" value="Add"/>
              {/* <button onClick={()=>this.toggleModal(true)}>Modal</button> */}
              {this.state.isOpen && <Modal close={this.toggleModal}/>}
            </form>
            
            {/* <div className='main_modal'>
              <div className='modal'></div>
            </div> */}
          </div>
        </div>

      );
    }
  }