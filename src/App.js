import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: 'd7ede08a92e54cb8cfd11d53091743019430fc57816163094d2358bf200c5bae',
  secret: 'd18603babdfca045866b8e2410d6713fe4c5b0e2012f96398f1f89240192e1ca',
  callbackUrl: "http://localhost:3000"
});
class App extends Component {

  state = {
    imageData: {},
    search: '',
  };
  //const url = 'https://api.unsplash.com/search/photos/?page=1&query=wallpaper&
  //client_id=d7ede08a92e54cb8cfd11d53091743019430fc57816163094d2358bf200c5bae'
  //access key: d7ede08a92e54cb8cfd11d53091743019430fc57816163094d2358bf200c5bae
  //secret key: d18603babdfca045866b8e2410d6713fe4c5b0e2012f96398f1f89240192e1ca
  //redirect uri: urn:ietf:wg:oauth:2.0:oob --> it's optional 
  //Authorization code : 3f80ab1d03fd8799de8804c63b1dd33c14e98f96eb5313001e3d4b18640ecfc8

  apiCall = async (search) => {
    const response = await unsplash.search.photos(search, 1, 16);
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
