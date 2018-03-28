import React from 'react';
import {returnPage} from '../../transcript/TextAPI.js';
import { connect } from 'react-redux';
import Loading from './Loading.js';


class TextDisplay extends React.Component{

	constructor(props) {
		super(props);
		this.scrollFunction = this.scrollFunction.bind(this);
		this.state= {
			reload: false
		}
	}

	scrollFunction(e){
		let currentScroll = document.getElementById('text-scroller').scrollTop + document.getElementById('text-scroller').offsetHeight;
		if(currentScroll === this.state.height){
			this.setState(function(){
				return{
					reload:true
				}
			})
		}
	}

	componentDidUpdate(){
		if(this.state.height !== document.getElementById('text-container').offsetHeight + 90){
			this.setState(function(){
				return{
					height:document.getElementById('text-container').offsetHeight + 90,
					reload: false
				}
			})
		}
		if(this.state.reload === false){
			document.getElementById('text-scroller').scrollTo(0, 0);
		}
	}

	render(){
		return(
			<div className='mainContainer'>
			<div id='text-scroller' className='textContainer' onScroll={this.scrollFunction}>
				<div id='text-container'>
				{this.props.content.map((paragraph,i)=>{
					return <div key={i} className='paragraph'>{paragraph}</div>
				})}
				</div>
				{ this.state.reload && <Loading />}
			</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		pageNumber: state.lazyLoader.page,
		content: state.lazyLoader.content
	}
}

const mapDispatchToProps = dispatch => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextDisplay);