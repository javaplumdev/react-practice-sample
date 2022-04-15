import './App.css';
import React from 'react';
//Components
import UserInput from './components/UserInput';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [name, setName] = React.useState({ id: '', name: '' });

	const [friendsArray, setFriendsArray] = React.useState([]);

	function handleChange(name) {
		setName((nameState) => {
			return {
				...nameState,
				id: uuidv4(),
				name: name,
			};
		});

		if (name.name === '') {
			console.log('Please enter a name');
		}
	}

	const handleClick = () => {
		setName((nameState) => {
			return {
				...nameState,
				id: uuidv4(),
			};
		});

		setFriendsArray([name, ...friendsArray]);
		console.log(friendsArray);
	};

	return (
		<div className="App">
			<UserInput
				handleClick={handleClick}
				name={name}
				handleChange={handleChange}
				friendsArray={friendsArray}
			/>
		</div>
	);
}

export default App;
