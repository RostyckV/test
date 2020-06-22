import React from "react";
// import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, } from 'react-router-dom';
import './index.scss';
import {About} from './about';
import {Contact} from './contact';
import {Home} from './home';
import ToDoList from './toDoList';
import SignUp from './signup';
import Component404 from './component404';
// import Modal from "./Modal";
// import Header from './header';
export default class App extends React.Component {
    render() {
      return (
        <div>
          <header className='header'>
            <BrowserRouter>
              <Switch>
                <Route component={About} path={'/about'} />
                <Route component={Contact} path={'/contact'} />
                <Route component={ToDoList} path={'/toDoList'} />
                <Route component={SignUp} path={'/signup'} />
                <Route component={Home} path={'/'} exact/>
                <Route component={Component404} path="" />
                <Route component={Component404} path="*" />
                <Route component={Component404} />
              </Switch>
            </BrowserRouter>
          </header>
        </div>
      );
    }
  }