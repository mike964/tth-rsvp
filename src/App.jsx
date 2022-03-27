import { useState } from 'react'
import ConfirmedFilter from './components/ConfirmedFilter'
import Counter from './components/Counter'
import GuestList from './components/Guests/GuestList'
import NewGuestForm from './components/Header/NewGuestForm'

const App = () => {
	const [isFiltered, setIsFiltered] = useState(false)
	const [pendingGuest, setPendingGuest] = useState('')
	const [guests, setGuests] = useState([
		{ id: 1, isConfirmed: false, isEditing: false, name: 'Mike' },
		{ id: 0, isConfirmed: false, isEditing: false, name: 'Tom' },
	])
	const [lastGuestId, setLastGuestId] = useState(2)

	const newGuestId = () => {
		const id = lastGuestId
		setLastGuestId(prevState => prevState + 1)
		// lastGuestId += 1
		return id
	}

	const setNameAt = (name, id) =>
		setGuests(
			guests.map(guest => {
				if (id === guest.id) {
					return {
						...guest,
						name,
					}
				}
				return guest
			})
		)

	// const handleNameInput = e => setPendingGuest(e.target.value)
	const toggleFilter = () => setIsFiltered(!isFiltered)

	const toggleGuestPropertyAt = (property, id) =>
		setGuests(
			guests.map(guest => {
				if (id === guest.id) {
					return {
						...guest,
						[property]: !guest[property],
					}
				}
				return guest
			})
		)

	const toggleConfirmationAt = id => toggleGuestPropertyAt('isConfirmed', id)

	const removeGuest = id => setGuests(guests.filter(item => item.id !== id))

	const toggleEditAt = id => {
		toggleGuestPropertyAt('isConfirmed', id)
	}

	const newGuestSubmitHandler = e => {
		e.preventDefault()
		const id = newGuestId()
		setGuests([
			{
				name: pendingGuest,
				isConfirmed: false,
				isEditing: false,
				id,
			},
			...guests,
		])
		setPendingGuest('') // clear input
	}

	return (
		<div className='App'>
			<header>
				<h1>RSVP</h1>
				<p> A Treehouse App </p>
				<NewGuestForm
					newGuestSubmitHandler={newGuestSubmitHandler}
					pendingGuest={pendingGuest}
					setPendingGuest={setPendingGuest}
				/>
			</header>
			<div className='main'>
				<ConfirmedFilter toggleFilter={toggleFilter} isFiltered={isFiltered} />

				<Counter guests={guests} />

				<GuestList
					guests={guests}
					toggleConfirmationAt={toggleConfirmationAt}
					toggleEditAt={toggleEditAt}
					setNameAt={setNameAt}
					isFiltered={isFiltered}
					removeGuestAt={removeGuest}
					pendingGuest={pendingGuest}
				/>
			</div>
		</div>
	)
}

export default App
