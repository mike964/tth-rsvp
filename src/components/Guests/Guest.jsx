import { useState } from 'react'
import PropTypes from 'prop-types'
import GuestName from './GuestName'

const Guest = ({
	name,
	setName,
	isConfirmed,
	handleConfirmation,
	handleRemove,
}) => {
	const [isEditing, setIsEditing] = useState(false)

	return (
		<li>
			<GuestName
				isEditing={isEditing}
				handleNameEdits={e => setName(e.target.value)}>
				{name}
			</GuestName>

			<label>
				<input
					type='checkbox'
					checked={isConfirmed}
					onChange={handleConfirmation}
				/>{' '}
				Confirmed
			</label>

			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? 'Save' : 'Edit'}
			</button>
			<button onClick={handleRemove}> X </button>
		</li>
	)
}

Guest.propoType = {
	name: PropTypes.string.isRequired,
	isConfirmed: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleConfirmation: PropTypes.func.isRequired,
	handleToggleEditing: PropTypes.func.isRequired,
	setName: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
}

export default Guest
