import React from "react";
import ReactDOM from 'react-dom';
import Mainpage from './components/common/Mainpage';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import './index.scss';
// // import {Home} from './index.jsx';
// import {About} from './components/common/about';


// // const el = <h1 className='rew asd'>Hello wronkg11111</h1>;
// // ReactDOM.render(<Welcome/>, document.getElementById('root'));




// class Mainpage extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     //   this.state = {value: ''};
  
//       // this.handleChange = this.handleChange.bind(this);
//       // this.handleSubmit = this.handleSubmit.bind(this);
//     // }
  
//     // handleChange(event) {
//     //   this.setState({value: event.target.value});
//     // }
  
//     // handleSubmit(event) {
//     //   alert('A name was submitted: ' + this.state.value);
//     //   event.preventDefault();
//     // }

  
//     render() {
//       return (
//         <>
//           <header className='header'>
//             <BrowserRouter>
//               <Switch>
//                 <Route component={About} path={'./components/common/about'} ></Route>
//               </Switch>
//             </BrowserRouter>
//             <span className='main'>To do list</span>
//           </header>
//           <div className='container'>
//             <form action="">
//               <input className='search' type="search" name="" id="" placeholder='Пошук'/>
//               <input className='button' type="button" value="Знайти"/>
//               <label htmlFor="">Всі
//                 <input className='checkbox' type="checkbox" name="" id=""/>
//               </label>
//               <label htmlFor="">Готові
//                 <input className='checkbox' type="checkbox" name="" id=""/>
//               </label>
//               <label htmlFor="">Важливі
//                 <input type="checkbox" name="" id=""/>
//               </label>
//               <br/>
//               <input className='button button_important' type="button" value="Important"/>
//               <input className='button button_delete' type="button" value="Delete"/>
//               <br/>
//               <input className='button button_done' type="button" value="Done"/>
//               <br/>
//               <input className='button button_add' type="button" value="Add"/>
//             </form>
//             <div className='main_modal'>
//               <div className='modal'></div>
//             </div>
//           </div>
//         </>

//       );
//     }
  // }
  
  ReactDOM.render(
    <Mainpage/>,
    document.getElementById('root')
  );

