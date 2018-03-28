import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

const Main = () => (
	<Provider store = {store} >
		<App />
	</Provider>
);

ReactDOM.render(<Main />, document.getElementById('app'));