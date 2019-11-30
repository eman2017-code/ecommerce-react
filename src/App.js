import React from 'react';
import MainPage from './MainPage';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {};
	}
	render() {
		return (
			<div>
				<MainPage />
			</div>
		);
	}
}

export default App;
