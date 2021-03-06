import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import axios from 'axios'
 
class India extends Component{

  constructor(){
    super();
    this.state ={
      data : {}
    }
  }

  componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
      this.setState({data:response.data});
    });
  }

    render(){

        return(

            <div className="row">
                <div className="col-md-12">
                <img src="https://www.countryflags.io/IN/shiny/64.png" />
                <h3>India</h3>
                <div className="col-md5-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className="badge badge-primary" style={{ width: '18rem' }}>
  <Card.Body className="text-center">
    <Card.Title>Total Cases</Card.Title>
    <h3>{this.state.data.cases}</h3>
    <Card.Text>
    [Today: {this.state.todayCases}]
    </Card.Text>
  </Card.Body>
</Card>

                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-warning" style={{ width: '18rem' }}>
  <Card.Body className="text-center">
    <Card.Title>ACTIVE CASES</Card.Title>
    <h3>{this.state.data.active}</h3>
    <Card.Text>

    </Card.Text>
  </Card.Body>
</Card>

                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem' }}>
  <Card.Body className="text-center">
    <Card.Title>RECOVERY</Card.Title>
    <h3>{this.state.data.recovered}</h3>
    <Card.Text>
    </Card.Text>
  </Card.Body>
</Card>

                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-danger" style={{ width: '18rem' }}>
  <Card.Body className="text-center">
    <Card.Title>DETAHS</Card.Title>
    <h3>{this.state.data.deaths}</h3>
    <Card.Text>
    </Card.Text>
  </Card.Body>
</Card>

                        </div>

                    </div>

                </div>
                </div>
                <div className="col-md-12">
                <Statedata />
            </div>
               
            </div>

        )
    }
}

export default India;