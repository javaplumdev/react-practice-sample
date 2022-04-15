function UserInput({ handleClick, handleChange, name, friendsArray }) {
	return (
		<div className="user-input">
			<input
				type="text"
				placeholder="Enter your name"
				onChange={(e) => handleChange(e.target.value)}
				name="name"
				required
			/>
			<button onClick={handleClick}>Add</button>

			<h1>List of friends</h1>
			<div className="friends-holder">
				{friendsArray.map((item) => {
					return (
						<div className="friends-lists" key={item.id}>
							<p>{item.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default UserInput;
