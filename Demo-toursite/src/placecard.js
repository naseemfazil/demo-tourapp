import React, { Component } from 'react';
import './hari2.css';
import Img from './images.jpg'

import axios from 'axios';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, CardActions, IconButton, }
    from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col, Row } from 'reactstrap';
import {CardTitle} from 'react-mdl';
import { UncontrolledCollapse, Button, CardBody } from 'reactstrap';

class Placecard extends Component {
    constructor() {
        super()
        this.state = { header: 'I am Header', contaier: 'I am Container', footer: 'I am Footer', item: [] }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/getAdmin')
            .then(response => {
                console.log("our api response")
                console.log(response);
                this.setState({ item: response.data })
                //console.log(this.state.item)
            })
            .catch(error => { console.log(error) })

    }
    butclick(val) {
        console.log("button clicked...." + val._id)

    }
    listitems() {
        let item = this.state.item;
        console.log(item)
        return (
            item.map((val, index) => {
                console.log(val.name)
                return (
                    <Col sm="12" className="mt-3 mb-3" >
                        <Card className="card">
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={"avatar"}>
                                        R
                </Avatar>
                                }

                                title={val.City}
                                subheader={val.Sta}
                            />
                            <img src={Img} />
                            {/* <CardMedia 
                            //className="bg"
                                // src='http://www.getmdl.io/assets/demos/welcome_card.jpg'
                            //  image="./images.jpg"
                                style={{ color: '#fff' , height: '176px', }}
                            /> */}
                            {/* <CardTitle style={{ color: '#fff', height: '176px', background: {Img} }}>Welcome</CardTitle> */}


                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <label > Stayingdays:  {val.Stayindays}</label>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <label>Spend Amount:  {val.SpendAmount}</label>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton style={{ marginRight: "-280px" }} id={`id${JSON.stringify(index)}`} >
                                    <ExpandMoreIcon  />
                                </IconButton>
                            </CardActions>
                            <UncontrolledCollapse toggler={`#id${JSON.stringify(index)}`}>
                                <CardContent>
                                    <Typography paragraph>Description:</Typography>
                                    <Typography paragraph>
                                        {val.Description}
                                    </Typography>
                                </CardContent>
                            </UncontrolledCollapse>

                        </Card>


                    </Col>
                )
            }))


    }
    render() {
        return <div>
            <Row >
                {this.listitems()}
            </Row>
        </div>
    }
}
export default Placecard;