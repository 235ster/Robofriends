import React, {Component} from 'react';
import CardList from  '../components/CardList.js';
import SearchBots from '../components/SearchBots.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js'

class App extends Component {
	constructor(){
		super();
		this.state ={
			robots : [],
			searchfield : ''
		}	
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then (user => this.setState({robots : user}));
	}
	onSearchChange =(event) =>{
		this.setState ({searchfield : event.target.value});
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots= robots.filter((robots) => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (!robots.length ?
			<div>
					<h1 className="tc">Loading</h1>
			</div>  :	
			<div className='tc'>
				<h1 className="f1">Robo Friends</h1>
				<SearchBots searchChange ={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots= {filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
			);		
	}
}
export default App;