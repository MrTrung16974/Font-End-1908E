import React, {Component} from 'react';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Content from './components/main/content.js'
import Slide from './components/main/slide.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* start Header */}
            <Header />
          {/* End Header */}
          {/* start Main */}
            <Slide />
          {/* End Main */}
      </div>
    );
  }
}

export default App;