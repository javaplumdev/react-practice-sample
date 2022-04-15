import './App.css';
import React from 'react';
//Components
import UserInput from './components/UserInput';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [total, setTotal] = React.useState([]);
	const [friendsArray, setFriendsArray] = React.useState([]);
	const [grandTotal, setGrandTotal] = React.useState();

	function handleChange(event) {
		const { name, value } = event.target;

		setFriendsArray((nameState) => {
			return {
				...nameState,
				[name]: value,
			};
		});
	}

	const handleClick = () => {
		const name = {
			id: uuidv4(),
			name: '',
			amount: 0,
		};

		setTotal((total) => {
			return [...total, parseInt(name.amount)];
		});

		setFriendsArray([name, ...friendsArray]);

		setGrandTotal(total.reduce((a, b) => a + b, 0));
	};

	return (
		<div className="App">
			<UserInput
				handleClick={handleClick}
				handleChange={handleChange}
				friendsArray={friendsArray}
				grandTotal={grandTotal}
			/>
		</div>
	);
}

export default App;
