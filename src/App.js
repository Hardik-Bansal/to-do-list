import React from 'react';
import Table from './Tabel';
import Form from './form';

class App extends React.Component {
	state = {
    characters: []
	}
	removeCharacter = (index) => {
		const {characters} = this.state;
		this.setState({
			characters: characters.filter((value, i) => {
				return i !== index;
			})
		})
	}
	handleSubmit = (character) => {
		this.setState({characters: [...this.state.characters, character]})
	}
	render(){
		const {characters} = this.state;
		return (
			<div className='tableContainer'>
				<h1>Hello guys and girl</h1>
				<Table characterData={characters} removeCharacter={this.removeCharacter}/>
				<Form handleSubmit={this.handleSubmit}/>
			</div>
		)
	}
}

export default App