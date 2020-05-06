import React, {Component} from 'react';
import './css/Furniture.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Content from './components/main/content.js'
import Slide from './components/main/slide.js';

class Furniture extends Component {
  render() {
    return (
      <div className="App">
			{/* start Header */}
				<Header />
			{/* End Header */}
			
			{/* start Main */}
			<main>
				{/* start Slide */}
					<Slide />
				{/* End Slide */}
				{/* start Content */}
					<Content />
				{/* End Content */}
			</main>
			{/* End Main */}
      </div>
    );
  }
}

export default Furniture;