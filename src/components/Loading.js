import React from 'react';
import { connect } from 'react-redux';
import {updatePage} from '../store/actions/index';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Loading next page in: 5',
      count: 5,
      nextPage: this.props.pageNumber + 1
    };
  }
  componentDidMount() {
    var stopper = 'Loading next page in: 0';
    this.interval = window.setInterval(function () {
    	if(this.state.text === stopper){
    		window.clearInterval(this.interval);
    		this.props.nextPage(this.state.nextPage);
    	}else{
    		let newCount = this.state.count - 1;
    		let newText = this.state.text.replace(/\d/g,'') + newCount;
    		this.setState(function () {
    			return {
    				text: newText,
    				count: newCount
    			}
    		});
    	}
    }.bind(this), 1000)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <p className='loading'>
        {this.state.text}
      </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading);