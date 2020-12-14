import React from 'react';

const TableHeader = ()=> {
	return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
	)
}

const TableBody = (props) => {
	const row = props.characterData.map((val, index) => {
		return (
			<tr key={index}>
				<td>{val.name}</td>
				<td>{val.job}</td>
				<td onClick={()=>props.removeCharacter(index)}>Delete</td>
			</tr>
		)
	})
	return <tbody>{row}</tbody>
}

class Table extends React.Component{
	render(){
	const {characterData, removeCharacter} = this.props;
		return (
			<table>
				<TableHeader />
				<TableBody characterData={characterData} removeCharacter={removeCharacter}/>		
        	</table>
		)
	}
}
export default Table;