import React, { Component } from 'react';
import {AppBar,Toolbar,IconButton,MenuIcon,AddIcon,SearchIcon, Typography} from '@material-ui/core'
import './bottombar.css';
class Bottombar extends Component{
    render()
    {
        return(<div>
            <AppBar position="fixed" color="primary" style={{top:"auto",bottom:"0"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            
          </IconButton>
          <Typography  variant="h6" style={{content:"center"}}> Happy and safe  journey tour</Typography>
        
          <div className="grow" />
          <IconButton color="inherit">
          </IconButton>
          <IconButton edge="end" color="inherit">
          </IconButton>
        </Toolbar>
      </AppBar>
        </div>)
    }
}
export default Bottombar;