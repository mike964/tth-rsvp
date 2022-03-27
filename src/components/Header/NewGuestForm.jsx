import React from 'react'

const NewGuestForm = ({ newGuestSubmitHandler, setPendingGuest, pendingGuest }) => {
	const handleInputChange = e => setPendingGuest(e.target.value)

	return (
		<form onSubmit={newGuestSubmitHandler}>
			<input
				type='text'
				onChange={handleInputChange}
				value={pendingGuest}
				placeholder='Invite someone..'
			/>
			<button type='submit' name='submit' value='submit'>
				Submit
			</button>
		</form>
	)
}

export default NewGuestForm
