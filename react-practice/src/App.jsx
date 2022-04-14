import './App.css';
import React from 'react';
//Components
import UserInput from './components/UserInput';

function App() {
	const [name, setName] = React.useState({ name: '' });

	const [friendsArray, setFriendsArray] = React.useState([]);

	function handleChange(event) {
		const { name, value } = event.target;

		setName((nameState) => {
			return {
				...nameState,
				[name]: value,
			};
		});
	}

	const handleClick = () => {
		setFriendsArray([name, ...friendsArray]);

		console.log(friendsArray);
	};

	return (
		<div className="App">
			<UserInput
				handleClick={handleClick}
				name={name}
				handleChange={handleChange}
			/>
		</div>
	);
}

export default App;
