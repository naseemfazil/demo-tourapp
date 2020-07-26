import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './Resgistration.css';
import { Button, Label, Input, FormGroup, Form, CustomInput } from 'reactstrap';
import { Router } from 'react-router';
import Swal from 'sweetalert2';

class Register extends Component {
    constructor() {
        super()
        this.state =
            {
                email: '',
                password: '',
                confirmationPassword: '',
                phonenumber: '',
                gender: ''
            }

        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.confirmationpasswordchange = this.confirmationpasswordchange.bind(this);
        this.phoneNumberchange = this.phoneNumberchange.bind(this);
        this.Genderchange = this.Genderchange.bind(this);
        this.buttonchange = this.buttonchange.bind(this);
    }

    emailchange(e) {
        this.setState({ email: e.target.value })
    }


    passwordchange(e) {
        this.setState({ password: e.target.value })
    }


    confirmationpasswordchange(e) {
        this.setState({ confirmationPassword: e.target.value })
    }


    phoneNumberchange(e) {
        this.setState({ phonenumber: e.target.value })
    }


    Genderchange(e) {
        this.setState({ gender: e.target.value })
    }


    buttonchange() {
        this.setState({
            email: this.state.email, password: this.state.password,
            confirmationPassword: this.state.confirmationPassword,
            phoneNumber: this.state.phoneNumber, gender: this.state.gender,
        })
        const a = this.state.email
        const b = this.state.password
        const c = this.state.confirmationPassword
        const d = this.state.phonenumber
        const e = this.state.gender

        console.log(a)
        let user = {}
        user.userName = a;
        if (a == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Email'
            })
            return;
        }

        user.password = b;
        if (b == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Password'
            })
            return;
        }

        user.confirmationPassword = c;

        if (c == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Conformation Password'
            })
            return;
        }

        if (b != c) {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Currect Password'
            })
            return;
        }


        user.phonenumber = d;
        if (d == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Moblie Number'
            })
            return;
        }

        user.gender = e;
        if (e == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Gender'
            })
            return;
        }
        console.log(user)



        console.log("our api")

        axios.post('http://localhost:3001/saveregister', user)
            .then(response => {
                console.log(response)
                if (response.data.code == "sucss") {
                    console.log("sucesss")
                }
                else if (response.data.code == "fail") {
                    console.log("fail")
                }

            })
            .catch(error => { console.log(error) }
            );
    }


    // const mymethod = async =(user)=>{
    //   const apicall = await axios.get('');
    //   console.log(apicall);
    // }



    //getmethod
    componentDidMount() {
        console.log("before placement api call")
        axios.get('http://localhost:3001/getRegister')
            .then(response => {
                console.log("our api responsel")
                console.log(response)
            })
    }
    //   console.log(response)
    //   if (response.data.code == "sucss"){
    //   console.log("sucesss")
    //   }
    //   else if(response.data.code == "fail"){
    //     console.log("fail")
    //   }

    // })
    // .catch(error => { console.log(error) }
    // );
    render() {

        return (
            <div className="backgroud">
                <Form className="Resgistration">
                    <h3>
                        <span className="font-weight-bold " align="center">Registration</span>
                    </h3>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="Email" value={this.state.email} onChange={this.emailchange} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="Password"  value={this.state.password} onChange={this.passwordchange} placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Confirmation Password</Label>
                        <Input type="password" value={this.state.confirmationPassword} onChange={this.confirmationpasswordchange} placeholder="ConfirmationPassword" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Mobile Number</Label>
                        <Input type="phone Number" pattern="[0-9]" maxlength="10" value={this.state.phonenumber} onChange={this.phoneNumberchange} placeholder="Mobile Number" />
                    </FormGroup>

                    <Label>Gender</Label>
                    <FormGroup>
                        <CustomInput type="radio" value="female" checked={this.state.gender == "female"} onChange={this.Genderchange} id="exampleCustomRadio" name="customRadio" label="Female" />
                        <CustomInput type="radio" value="male" checked={this.state.gender == "male"} onChange={this.Genderchange} id="exampleCustomRadio2" name="customRadio" label="Male" />
                    </FormGroup>

                    {/* <FormGroup>
                        <Label>OTP Number</Label>
                        <Input type="OTP Number" placeholder="OTP  Number" />
                    </FormGroup> */}
                    {/* <Button className="btn-lg btn-success btn-block " onClick={this.buttonchange}> */}

                    <Button className="btn-lg  btn-block " color='primary' onClick={this.buttonchange}>SIGN-IN</Button>

                    {/* SIGN-IN */}
                    {/* </Button> */}
                </Form>

            </div>
        );
    }
}


export default Register;

