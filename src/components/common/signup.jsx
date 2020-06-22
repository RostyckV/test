import React from 'react';
import {Link} from 'react-router-dom';

export default class SignUp extends React.Component {
    state = {
        nameValue: "",
        lastNameValue: "",
        emailValue: "",
        passwordValue: "",
        sendData: {
          name: "",
          lastName: "",
          email: "",
          password: "",
        }
    }
    // handleChange = ({target:{value}}) =>{
    //     this.setState({nameValue:value})
    // }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value });
    };
    handleSubmit = () => {
        const {nameValue, lastNameValue, emailValue, passwordValue} = this.state;
        this.setState({
            nameValue: "",
            lastNameValue: "",
            passwordValue: "",
            emailValue: "",
            sendData: {
                name: nameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: passwordValue,
            },
        });
    };
    render() {
        const {nameValue, lastNameValue, emailValue, passwordValue, sendData} = this.state;
        console.log(sendData);
        return(
            <div>
                <div className='pages'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/toDoList'>To Do List</Link>
                    <Link className='link' to='/signup'>Sign Up</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link className='link' to='/about'>About</Link>
                </div>
                <div className='blockSignup'>
                    <p className="signup">Please sign up</p>
                    <form action="">
                        <input className="input" type="text" name="nameValue" value={nameValue} onChange={this.handleChange} placeholder="First name"/>
                        <input className="input" type="text" name="lastNameValue" value={lastNameValue} onChange={this.handleChange} placeholder="Last name"/>
                        <input className="input" type="email" name="emailValue" value={emailValue} onChange={this.handleChange} placeholder="Email address"/>
                        <input className="input" type="password" name="passwordValue" value={passwordValue} onChange={this.handleChange} placeholder="Password"/>
                        <input className="input buttonSignup" onClick={this.handleSubmit} type="button" value="Sign up"/>
                    </form>
                </div>
            </div>
        )
    }
};