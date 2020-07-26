import React, { Component } from 'react';
import {Paper,Card,CardActionArea} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import {Label,FormGroup,Form} from 'reactstrap';
import './login.css';

class Viewplaceinfo extends Component{
    constructor()
    {
        super()
    this.state={
        checkboxState : true
    }
}
  componentDidMount(){
      console.log(this.props.location.state.val);
      
  }
    render()
    {
    
     
        return(
            <div className="login">
<Card style={{padding:'23px'}}>
    <CardActionArea>
        <Form>
        <FormGroup>
<Label style={{ fontWeight: 'bold' }}>{`City :    ${this.props.location.state.val.City}`}</Label>
</FormGroup>
<FormGroup>
<Label> <span 
    id="textSpan" 
    style={ this.state.checkboxState ? { fontWeight: 'normal' } : { fontWeight: 'bold' } }
>
    { this.props.text }
</span>{`State :    ${this.props.location.state.val.Sta}`}</Label>
</FormGroup>
<FormGroup>
<Label>{`Staying days:    ${this.props.location.state.val.Stayindays}`}</Label>
</FormGroup>
<FormGroup>
<Label> {`Spend Amount :    ${this.props.location.state.val.SpendAmount}`}</Label>
</FormGroup>
<FormGroup>
<Label> {`Place :    ${this.props.location.state.val.place}`}</Label>
</FormGroup>
<FormGroup>
<Label> {`Description :    ${this.props.location.state.val.Description}`}</Label>
</FormGroup>
<FormGroup>
<Label> {`Url :    ${this.props.location.state.val.Url}`}</Label>
</FormGroup>
</Form>
</CardActionArea>
    </Card>
            </div>
        )
    }
}
export default Viewplaceinfo;