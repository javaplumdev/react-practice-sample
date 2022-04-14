function UserInput({ handleClick, handleChange, name }) {
	return (
		<div className="user-input">
			<input
				type="text"
				placeholder="Enter your name"
				onChange={handleChange}
				name="name"
				value={name.name}
			/>
			<button onClick={handleClick}>Add</button>

			<h1>List of friends</h1>
			<div className="friends-holder">
				<div className="friends-lists">
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default UserInput;
