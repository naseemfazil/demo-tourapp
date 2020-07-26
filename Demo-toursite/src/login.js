import React, { Component } from 'react';
import { Label, Button, FormGroup, Input, Form, NavLink, NavItem } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card, Link } from '@material-ui/core'
import './login.css'


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// import {FacebookLoginButton,InstagramLoginButton} from 'react-social-login-buttons';

class Login extends Component {
    constructor(props) {

        super(props)
        this.state = { Email: '', Password: '' }

        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.button = this.button.bind(this);
        const loc = window.localStorage.getItem("userId");
        localStorage.removeItem('userId');

        if (loc == undefined || loc == "" || loc == null) {
            console.log('hiii')
            //    this. props.history.push('/login')
            // return <Route path="/placement" component={plecementBut}></Route>
        }
        else {
            // this. props.history.push('/placement')
            console.log("how are you")
        }

    }
    email(e) {
        this.setState({ Email: e.target.value })
    }
    password(e) {
        this.setState({ Password: e.target.value })
    }
    button() {
        this.setState({ Email: this.state.Email, Password: this.state.Password })
        const a = this.state.Email;
        const b = this.state.Password;
        let user = {}
        user.Email = a;
        if (a == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Email'
            })
            return;
        }
        user.Password = b;
        if (b == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Password'
            })
            return;
        }
        console.log(user)
        //token'ndra per'la successNazim'ngra value localstorage'la set aagum
        //  localStorage.setItem('token',"successNazim");
        //  localStorage.removeItem('token')
        //  console.log("toke value")
        //  console.log(localStorage.getItem('token'))
        //  console.log("hariToken value")
        //  console.log(localStorage.getItem('hariToken'))
        // console.log(pg)
        window.localStorage.setItem('userId', "sucess");
        const loc = window.localStorage.getItem('userId');
        console.log("check localstorage")
        console.log(loc);

        // if(this.state==null)
        //  {
        //     //  props.history.push('./login')
        //     <Route
        //     path="/login"
        //     render={props =>
        //     //   userService.isLoggedIn() ? (
        //         <Redirect to="/login" />
        //     //   ) : (
        //         // <Login {...props} />
        //     //   )
        //     }
        //   />
        console.log("check login")




        axios.post('http://localhost:3001/checkLogin', user)
            .then(response => {
                console.log("our chack login response");
                console.log(response)

            })




    }
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('http://localhost:3001/getLogin'));

        if (localStorage.getItem('http://localhost:3001/getLogin')) {
            this.setState({ Email: this.documentData.Email })
            // this.setState({Password:this.documentData.Password})
        }
        else {
            this.setState({
                Email: '',
                Password: ''
            })
        }
    }
    componentWillMount() {
        localStorage.removeItem('http://localhost:3001/getLogin');
    }


    render() {

        return (
            <div>
                {/* <h3 align="center"> .</h3> */}
                <Form className="login">
                    <h3 align="center"><span className="font-weight-bold content-center">Login</span></h3>
                    <Card style={{ padding: '23px' }}>
                        <FormGroup>
                            <Label className="mt-3 mb-3">Email</Label>
                            <Input type="email" value={this.state.Email} onChange={this.email} placeholder="Email" />
                            <label className="mt-3 mb-3">Password</label>
                            <Input type="password"  value={this.state.Password} onChange={this.password} placeholder="Password" />

                            <Button onClick={this.button} className="btn-lg btn-primary btn-block mt-3 mb-3" color="primary" >Login</Button>

                            {/* <div className="text-center">
    <Button  color="link">Register</Button>
      </div>  */}
                            <div className='text-center' style={{ color: '' }}>

                                <NavLink href="/register">Register</NavLink>
                                {/* <Link href="/register" color="primary">demo</Link> */}
                            </div>

                            {/* <div className="text-center">
        <a href="sign-up">Register</a>
    </div> */}
                            {/* <div className="text-center">
        <a href="forgotpassword">Forgotpassword</a>
    </div> */}
                        </FormGroup>
                    </Card>
                </Form>

            </div>
        )
    }
}

export default Login;