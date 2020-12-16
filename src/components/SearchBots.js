import React from 'react';
import './SearchBots.css'

const SearchBots= ({searchChange}) => {

	return (
		<div>
			<input className ="pa2 ba b--light-blue"
				type="search" 
				placeholder="Search Robots"
				onChange={searchChange}/>
		</div>
		);
}

export default SearchBots;