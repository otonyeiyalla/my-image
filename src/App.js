import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import Unsplash, { toJson } from 'unsplash-js';
import dotenv from 'dotenv';
dotenv.config()

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_ACCESS_KEY,
  secret: process.env.REACT_APP_CLIENT_SECRET,
  callbackUrl: process.env.REACT_APP_redirect_uri
}, ()=> console.log("here"));


  
class App extends Component {

  state = {
    imageData: {},
    search: '',
  };
  apiCall = async (search) => {
    const response = await unsplash.search.photos(search, 1);
    const responseJson = await toJson(response);
    return responseJson.results;
  }
  setImageData = async (search) => {
    const imageData = await this.apiCall(search);
    this.setState({
      imageData: imageData,
    })
  }
  componentDidMount() {
    this.setImageData(this.state.search);
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setImageData(value)
  }

  render() {
    return (
      <div className="App">
        <Header onChange={this.handleChange}
          theImage={this.state.imageData}
           />
      </div>
    );
  }
}
export default App;
