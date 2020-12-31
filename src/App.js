

import './App.css';
import { Customers } from './Customers'
import { Header } from './Header'
import { ExportExcel } from './ExportExcel'
import React, { Component } from 'react'
//import axios from 'axios';

class TemplateApp extends Component {

  
  customers = () => {
    let custs = []
    for (let i = 0; i <= 25; i++) {
      custs.push({firstName: `first${i}`, lastName: `last${i}`,
      email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
    }
    return custs;
  }
  constructor() { super(); this.state = { customers: this.customers(),fileName: 'Customers2333' } }


  //async componentDidMount() { await fetch('api').then(res => res.json()).then((data) => { console.log("Gogogog");this.setState({ customers: data }) }) .catch(console.log) }
/*
  async componentDidMount() {
    await axios.get('api')
      .then(result => this.setState({
        customers: result.data
      }))
  };*/

  
  render() {
    console.log(JSON.stringify( this.state.customers));
    return (
      <div className="App">
        <Header />
        <div className="row">
            <div className="col-md-8">
                <h2>Click here to download template excel file</h2>
            </div>
            <div className="col-md-4 right">
            <ExportExcel csvData={this.state.customers} fileName={this.state.fileName} />
            </div>
        </div>
        <Customers customers={this.state.customers}/>
      </div>

    );

  }
}

export default TemplateApp;
