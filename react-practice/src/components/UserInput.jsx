function UserInput({
	handleClick,
	handleChange,
	friendsArray,
	grandTotal,
	name,
}) {
	return (
		<div className="user-input">
			<input
				type="text"
				placeholder="Enter your name"
				onChange={handleChange}
				name="name"
				value={name.name}
				required
			/>
			<input
				type="text"
				placeholder="Enter your amount"
				onChange={handleChange}
				name="amount"
				value={name.amount}
				required
			/>
			<button onClick={handleClick}>Add</button>

			<h1>List of expenses</h1>
			<p>Total expenses: {grandTotal}</p>
			<div className="friends-holder">
				{friendsArray.map((item) => {
					return (
						<div className="friends-lists" key={item.id}>
							<p>{item.name}</p>
							<p>Amount: {item.amount}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default UserInput;
