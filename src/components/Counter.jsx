import React from 'react'
// import PropTypes from 'prop-types';

const Counter = ({ guests }) => {
	const totalGuests = guests.length
	// number of Guests who are confirmed
	const numberAttending = guests.reduce(
		(total, guest) => (guest.isConfirmed ? total + 1 : total),
		0
	)

	const numberUnconfirmed = totalGuests - numberAttending

	return (
		<table className='counter'>
			<tbody>
				<tr>
					<td>Attending:</td>
					<td>{numberAttending}</td>
				</tr>
				<tr>
					<td>Unconfirmed:</td>
					<td>{numberUnconfirmed}</td>
				</tr>
				<tr>
					<td>Total:</td>
					<td>{totalGuests}</td>
				</tr>
			</tbody>
		</table>
	)
}

// Counter.propTypes = {
//   numberAttending: PropTypes.number,
//   numberUnconfirmed: PropTypes.number,
//   totalInvited: PropTypes.number
// };

export default Counter
