import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image img="https://images.wallpaperscraft.com/image/glare_background_blur_dark_63553_1920x1080.jpg" />
      </div>
    );
  }
}

export default App;
