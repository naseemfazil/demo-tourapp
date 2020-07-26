import React from 'react'
import { Button, Label, Input, FormGroup, Form, rowform, col, CustomInput } from 'reactstrap';
import './admin.css';
import Img from './images.jpg'


const axios = require("axios");

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            City: '',
            Sta: '',
            ImageUrl: '',
            Stayindays: '',
            SpendAmount: '',
            place: '',
            datetime: '',
            Description: '',
            Url: '',
            file: null,
            dummyimg: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
        };
        this.citychange = this.citychange.bind(this);
        this.stachange = this.stachange.bind(this);
        this.stayindayschange = this.stayindayschange.bind(this);
        this.SpendAmountchange = this.SpendAmountchange.bind(this);
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

    //file save

    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('http://localhost:3002/upload', formData, config)
            .then((response) => {
                console.log(response);
                console.log(response.data)
                this.setState({ ImageUrl: response.data.upload })
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }
    buttonchange() {
        this.setState({
            City: this.state.City,
            state: this.state.Sta,
            Stayindays: this.state.Stayindays,
            SpendAmount: this.state.SpendAmount,
            place: this.state.place,
            datetime: this.state.datetime,
            Description: this.state.Description,
            Url: this.state.Url

        })
        const a = this.state.City;
        const b = this.state.Sta;
        const i = this.state.ImageUrl;
        const c = this.state.Stayindays;
        const d = this.state.SpendAmount;
        const f = this.state.place;
        const g = this.state.datetime;
        const h = this.state.Description;
        const e = this.state.Url;

        console.log(a)
        let user = {}
        user.City = a;
        user.Sta = b;
        user.ImageUrl = i;
        user.Stayindays = c;
        user.SpendAmount = d;
        user.place = f;
        user.datetime = g;
        user.Description = h;
        user.Url = e;
        console.log(user)

        console.log("our api")
        axios.post('http://localhost:3001/savePlace', user)
            .then(response => {
                console.log(response)
            })
            .catch(error => { console.log(error) }
            );

    }
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
            <div className="admin">
                <form onSubmit={this.onFormSubmit}>

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

                        <Input type="number" name='stay' value={this.state.stayindays} onChange={this.stayindayschange} min={0} max={100} step="1" maxlength="10" placeholder="Staying Days" id='3' />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Spend Amount">Spend Amount(Approx.)</Label>

                       <Input type='number' name='Spend' value={this.state.SpendAmount} onChange={this.SpendAmountchange} min={0} max={100000} placeholder="Spend Amount(Approx.)" id='4' />
                    </FormGroup>


                    <FormGroup>
                        <Label for="FileBrowser">Upload</Label>
                        <input type="file" name="myImage" onChange={this.onChange} />
                        <button type="submit" >Upload</button>
                    </FormGroup>
                    {console.log()}
                    <FormGroup>
                        <img src={Img} width="250" height="250" />
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
                    </FormGroup>
                    <Button onClick={this.buttonchange}>Submit</Button>
                </form>
            </div>
        )
    }
}

export default ReactUploadImage