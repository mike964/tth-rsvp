import React from 'react'
import GuestList from './Guests/GuestList.jsx'
// import PropTypes from 'prop-types'
// import ConfirmedFilter from './ConfirmedFilter.jsx'
// import GuestList from './Guests/GuestList.jsx'

const MainContent = props => (
	<div className='main'>
		<div>
			<h2>Invite</h2>
			<label>
				<input
					type='checkbox'
					onChange={this.toggleFilter}
					checked={this.state.isFiltered}
				/>{' '}
				Hide those who haven't responded
			</label>
		</div>

		<Counter
			totalInvited={props.totalInvited}
			numberAttending={props.numberAttending}
			numberUnconfirmed={props.numberUnconfirmed}
		/>

		<GuestList
			guests={this.state.guests}
			toggleConfirmationAt={this.toggleConfirmationAt}
			toggleEditingtionAt={this.toggleEditingtionAt}
			setNameAt={this.setNameAt}
			isFiltered={this.state.isFiltered}
			removeGuestAt={this.removeGuestAt}
			pendingGuest={this.state.pendingGuest}
		/>
	</div>
)

// MainContent.propTypes = {
// 	toggleFilter: PropTypes.func.isRequired,
// 	isFiltered: PropTypes.bool.isRequired,
// 	totalInvited: PropTypes.number.isRequired,
// 	numberAttending: PropTypes.number.isRequired,
// 	numberUnconfirmed: PropTypes.number.isRequired,
// 	guests: PropTypes.array.isRequired,
// 	toggleConfirmationAt: PropTypes.func.isRequired,
// 	toggleEditingtionAt: PropTypes.func.isRequired,
// 	setNameAt: PropTypes.func.isRequired,
// 	removeGuestAt: PropTypes.func.isRequired,
// 	pendingGuest: PropTypes.string.isRequired,
// }

export default MainContent
