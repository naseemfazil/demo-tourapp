import React, { Component } from 'react';
import './hari2.css';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,Row,Col,FormGroup
} from 'reactstrap';
// import {CardActions ,Card,Button,CardTitle,CardText} from 'react-mdl';
import axios from 'axios';
// import { FormGroup } from '@material-ui/core';
//  import './hari2.css';
class Admincard extends Component {
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
        console.log("button clicked...." +val. _id)

    }
    listitems() {
        let item = this.state.item;
        console.log(item)
        return (
            item.map((val, index) => {
                console.log(val.name)
                return (
                  <Col sm="12"className="mt-3 mb-3" >
                        
                    <Card  className="card">
                        <CardHeader>{val.City}</CardHeader>
                        <CardBody>
                            <CardTitle> {val.Place} </CardTitle>
                            <CardText>
                                {val.Description}
                            </CardText>
                            

                            
                        </CardBody>
                        {/* <CardFooter><Button>More</Button>{this.state.footer}</CardFooter> */}
                        {/* <Button onClick ={this.butclick.bind(this,val)}>More</Button> */}
                        <Button onClick={() => {
                            this.butclick.bind(this, val);
                            this.props.history.push('/view_pass',{val:val});
                        }}>More details</Button>
                    </Card>
                   </Col>
                    )
            }))

        //         <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
        //     <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>{val.name}</CardTitle>
        //     <CardText>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //         Aenan convallis.
        //     </CardText>
        //     <CardActions border>
        //         <Button colored>View Updates</Button>
        //     </CardActions>
        // </Card>)}))

    }
    render() {
        return <div>
            <Row >
        {this.listitems()}
            </Row>
        </div>
    }
}
export default Admincard;