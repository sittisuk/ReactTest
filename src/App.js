import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    imageUrl: ""
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
    .then( res => res.json() )
    .then( json => json.data.image_url )
    .then( (imageUrls) => {
      // console.log(imageUrl);
      // console.log('ok');
      this.setState({
        imageUrl: imageUrls
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="rainbow">Welcome to beer</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={this.state.imageUrl} alt={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
