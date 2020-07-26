import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import Bottombar from './bottembar';
// import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';



import './Home.css'
import Register from './register';
// import Viewplaceinfo from './viewplaceinfo'
import ViewPassInfo from './viewplaceinfo';
import Card from './admincard'
import Admin from './admin';
import Admindemo from './new';

import Login from './login';



const From = (props) => {
  const RegBut = () => {

    props.history.push('/register')
  }


  const AdmBut = () => {

    props.history.push('/Admin')
  }


  const LogBut = () => {

    props.history.push('/Login')
  }



  return (<div className="root">

    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">

        </IconButton>
        <Typography variant="h6" className="title">
        𝓣𝓸𝓾𝓻 𝓼𝓲𝓽𝓮
          </Typography>
        {/* <Button onClick={RegBut} color="inherit"> Register </Button> */}
        <Button onClick={AdmBut} color="inherit"> Admin </Button>
        {/* <Button onClick={LogBut} color="inherit"> Logout </Button> */}
        <ExitToAppIcon onClick={LogBut}></ExitToAppIcon>
      </Toolbar>
    </AppBar>
   
    <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-white" >
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <Typography variant="h6" className="title" align="center">
            𝓣𝓸𝓾𝓻 𝓼𝓲𝓽𝓮
          </Typography>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div> */}
</nav>
  </div>
  )
}


const RegBut = (props) => { return <div> <Register /></div> }
const admBut = (props) => { return <div> <Admin /> </div> }

const LogBut = (props) => { return <div> <Login /> </div> }

class Home extends Component {
  constructor() {
    super()
  }
 
  render() {
    return (
      <div>

        <BrowserRouter>
          <div className="root">
            <Switch>
              <Route exact path="/" component={From}></Route>
              {/* <Route path="/viewplaceinfo" component={Viewplaceinfo}></Route> */}
              <Route path="/register" component={RegBut}></Route>
              <Route path="/Admin" component={admBut}></Route>
              <Route path='/view_pass' component={ViewPassInfo}></Route>
              <Route path="/Login" component={LogBut}></Route>
              <Route path ="/admincard" component={Card}></Route>
              <Route path ="/admindemo" component={Admindemo}></Route>

             
            </Switch>

          </div>
        </BrowserRouter>
        {/* <Bottombar/> */}
      </div>
     
    );
  }
}
export default Home;
