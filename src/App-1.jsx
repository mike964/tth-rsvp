import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import GuestList from './components/Guests/GuestList'

/*
 * Class Component
 */
class App extends Component {
	state = {
		isFiltered: false,
		pendingGuest: ' ',
		guests: [
			{ id: 1, isConfirmed: false, isEditing: false, name: 'Mike' },
			{ id: 0, isConfirmed: false, isEditing: false, name: 'Tom' },
		],
	}

	lastGuestId = 2

	newGuestId = () => {
		const id = this.lastGuestId
		this.lastGuestId += 1
		return id
	}

	toggleGuestPropertyAt = (property, id) =>
		this.setState({
			guests: this.state.guests.map(guest => {
				if (id === guest.id) {
					return {
						...guest,
						[property]: !guest[property],
					}
				}
				return guest
			}),
		})

	toggleConfirmationAt = id => this.toggleGuestPropertyAt('isConfirmed', id)

	removeGuestAt = id =>
		this.setState({
			guests: [
				...this.state.guests.slice(0, id),
				...this.state.guests.slice(id + 1),
			],
		})

	toggleEditingtionAt = id => this.toggleGuestPropertyAt('isEditing', id)

	setNameAt = (name, id) =>
		this.setState({
			guests: this.state.guests.map(guest => {
				if (id === guest.id) {
					return {
						...guest,
						name,
					}
				}
				return guest
			}),
		})

	toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered })

	handleNameInput = e => this.setState({ pendingGuest: e.target.value })

	newGuestSubmitHandler = e => {
		e.preventDefault()
		const id = this.newGuestId()
		this.setState({
			guests: [
				{
					name: this.state.pendingGuest,
					isConfirmed: false,
					isEditing: false,
					id,
				},
				...this.state.guests,
			],
			pendingGuest: '',
		})
	}

	getTotalInvited = () => this.state.guests.length

	getAttendingGuests = () =>
		this.state.guests.reduce(
			(total, guest) => (guest.isConfirmed ? total + 1 : total),
			0
		)

	render() {
		const totalInvited = this.getTotalInvited()
		const numberAttending = this.getAttendingGuests()
		const numberUnconfirmed = totalInvited - numberAttending
		return (
			<div className='App'>
				<header>
					<h1>RSVP</h1>
					<p> A Treehouse App </p>
					<form onSubmit={this.newGuestSubmitHandler}>
						<input
							type='text'
							onChange={this.handleNameInput}
							value={this.state.pendingGuest}
							placeholder='Invite someone..'
						/>
						<button type='submit' name='submit' value='submit'>
							Submit
						</button>
					</form>
				</header>
				<div className='main'>
					<div>
						<h2> Invitees </h2>
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
						totalInvited={totalInvited}
						numberAttending={numberAttending}
						numberUnconfirmed={numberUnconfirmed}
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
			</div>
		)
	}
}

export default App
