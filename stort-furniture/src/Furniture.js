import React, {Component} from 'react';
import './css/Furniture.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Content from './components/main/content.js'
import Slide from './components/main/slide.js';

let Scroll_top = () => {
	return(
		<div className="scroll-top">
			<i class="fas fa-chevron-up"></i>
			<p>TOP</p>	
		</div>
	)
}

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

			{/* Start ./ footer */}
			<Footer />
			{/* End ./ footer */}

			{/* Start ./ scroll top */}
			<Scroll_top />
			{/* End ./ scroll top */}
      </div>
    );
  }
}

export default Furniture;