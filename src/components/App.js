import React from 'react';
import TextDisplay from './TextDisplay';
import Footer from './Footer';
import Title from './Title';

class App extends React.Component{
	render(){
		return(
			<div>
				<Title />
				<TextDisplay />
				<Footer />
			</div>
		)
	}
}

export default App;