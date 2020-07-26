import React, { Component } from 'react';
import { Button, Label, Input, FormGroup, Form, rowform, col, CustomInput } from 'reactstrap';
import axios from 'axios';
import './admin.css'
import Swal from 'sweetalert2';
import { log } from 'util';

class Admin extends Component {
  constructor() {
    super()

    this.state =
      {
        City: '',
        Sta: '',
        Stayindays: '',
        SpendAmount: '',
        upload: '',
        place: '',
        datetime: '',
        Description: '',
        Url: '',
        Submit: '',
        urlimage:'',
        file:null
      }
    //    3rd binding process
    this.citychange = this.citychange.bind(this);
    this.stachange = this.stachange.bind(this);
    this.stayindayschange = this.stayindayschange.bind(this);
    this.SpendAmountchange = this.SpendAmountchange.bind(this);
    this.uploadchange = this.uploadchange.bind(this);
    this.placechange = this.placechange.bind(this);
    this.datetimechange = this.datetimechange.bind(this);
    this.Descriptionchange = this.Descriptionchange.bind(this);
    this.Urlchange = this.Urlchange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
       this.buttonchange = this.buttonchange.bind(this);

  }


  citychange(e) {
    this.setState({ City: e.target.value })
  }


  stachange(e) {
    this.setState({ Sta: e.target.value })
  }


  stayindayschange(e) {
    this.setState({ Stayindays: e.target.value })
  }


  SpendAmountchange(e) {
    this.setState({ SpendAmount: e.target.value })
  }


  uploadchange(e) {
    this.setState({ upload: e.target.value })
  this.setState({
    selectedFile:e.target.files[0]
  })
  }

  placechange(e) {
    this.setState({ place: e.target.value })
  }


  datetimechange(e) {
    this.setState({ datetime: e.target.value })
  }


  Descriptionchange(e) {
    this.setState({ Description: e.target.value })
  }

  Urlchange(e) {
    this.setState({ Url: e.target.value })
  }
 
//file upload button:
onFormSubmit(e){
  e.preventDefault();
  const formData = new FormData();
  formData.append('myImage',this.state.file);
  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
  axios.post('http://localhost:3002/upload',formData,config)
      .then((response) => {
          alert("The file is successfully uploaded");
      }).catch((error) => {
  });
}
onChange(e) {
  this.setState({file:e.target.files[0]});
}



  buttonchange() {
    this.setState({
      City: this.state.City, state: this.state.Sta,
      Stayindays: this.state.Stayindays,
      SpendAmount: this.state.SpendAmount, upload: this.state.upload, place: this.state.place, datetime: this.state.datetime, Description: this.state.Description, Url: this.state.Url
    })


    const a = this.state.City;
    const b = this.state.Sta;
    const c = this.state.Stayindays;
    const d = this.state.SpendAmount;
    const e = this.state.upload;
    const f = this.state.place;
    const g = this.state.datetime;
    const h = this.state.Description;
    const i = this.state.Url;


    console.log(a)
    let user = {}
    user.City = a;
    if (a == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter City'
      })
      return;
    }

    user.Sta = b;
    if (b == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter State'
      })

      return;
    }

    user.Stayindays = c;
    if(c >=0 && c<=10)
    {

    }

    if (c == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter Stay in days'
      })
      return;
    }

    user.SpendAmount = d;
    //alert ku pnrom
    if (d == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter Amount'
      })

      return;
    }


    user.upload = e;

    if (e == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter the file'
      })

    }

    // place validation
    if (f == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter the place'
      })
      return;
    }
    user.place = f;
    
    
    user.datetime = g;
    if (g == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter date&time'
      })

      return;
    }


    user.Description = h;
    if (h == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter Description'
      })

      return;
    }
    user.Url = i;
    if (i == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Enter the url'
      })

      return;
    }

    console.log(user)


    console.log("our api")
    axios.post('http://localhost:3001/savePlace', user)
      .then(response => {
        console.log(response)
      })
      .catch(error => { console.log(error) }
      );
  }

  //nxt getku

  componentDidMount() {
    console.log("before placement api call")
    axios.get('http://localhost:3001/getAdmin')
      .then(response => {
        console.log("our api responsel")
        console.log(response)
      })
  }


  render() {
    return (
      <div class='admin'>

        <h3 className="font-weight-bold" align="center">Admin
           </h3>
        <FormGroup>
          <Label for="City">City</Label>
          <Input type="city" name='city' value={this.state.city} onChange={this.citychange} placeholder="City" id='1' />
        </FormGroup>

        <FormGroup>
          <Label for="State">State</Label>

          <Input type="text" name='state' value={this.state.Sta} onChange={this.stachange} placeholder="State" id='2' />
        </FormGroup>

        <FormGroup>
          <Label for="stay in days">Staying Days</Label>

          <Input type="number" name='stay' value={this.state.stayindays} onChange={this.stayindayschange}min={0} max={100} step="1" maxlength="10" placeholder="Staying Days" id='3' />
        </FormGroup>

        <FormGroup>
          <Label for="Spend Amount">Spend Amount(Approx.)</Label>

          <Input type='number' name='Spend' value={this.state.SpendAmount} onChange={this.SpendAmountchange} min={0} max={100} placeholder="Spend Amount(Approx.)" id='4' />
        </FormGroup>

        <FormGroup>
          <Label for="FileBrowser">Upload</Label>

          <CustomInput type="file" name='file' value={this.state.upload} onChange={this.uploadchange} id='5' />
          <Button onClick={this.onFormSubmit} style={{margin:'4px'}}>Upload</Button>
        </FormGroup>

        <FormGroup>
          
          <Label for="place">Place</Label>
          <Input
            type="place"
            name="place"
            value={this.state.place}
            onChange={this.placechange}
            placeholder="Place"
            id='6'
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleDatetime">Datetime</Label>
          <Input
            type="date"
            name='datetime'
            value={this.state.datetime}
            onChange={this.datetimechange}
            placeholder="datetime"
            id='7'
          />
        </FormGroup> */}


        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name='text' value={this.state.Description} onChange={this.Descriptionchange} id='8' />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">Url</Label>
          <Input
            type="Url"
            value={this.state.Url}
            name="url"
            onChange={this.Urlchange}
            placeholder="url placeholder"
            id='9'
          />
        </FormGroup>

        {/* <Button onClick={this.buttonchange}>Submit</Button>s */}

        <Button className="btn-lg  btn-block " color='primary' onClick={this.buttonchange}>Submit</Button>


      </div>
    )
  }
}


export default Admin;
