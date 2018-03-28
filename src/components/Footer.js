import React from 'react';
import { connect } from 'react-redux';
import {updatePage} from '../store/actions/index';

class Footer extends React.Component{
	constructor(props) {
		super(props);
		this.nextClickEventCreated = this.nextClickEventCreated.bind(this);
		this.prevClickEventCreated = this.prevClickEventCreated.bind(this);
	}
	nextClickEventCreated(){
		let nextIndex = this.props.pageNumber + 1;
		this.props.nextPage(nextIndex);
	}
	prevClickEventCreated(){
		let nextIndex = this.props.pageNumber - 1;
		this.props.nextPage(nextIndex);
	}
	render(){
		return(
			<div className='footer-styling'>
				{this.props.pageNumber !== 1 && <button onClick={this.prevClickEventCreated}>Previous</button>}
				{this.props.pageNumber !== 7 && <button onClick={this.nextClickEventCreated}>Next</button>}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		pageNumber: state.lazyLoader.page,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextPage: (num) => dispatch(updatePage(num))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);