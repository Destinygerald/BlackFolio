import '../App.css'
import { NavContextFunction } from '../context/NavContext.jsx'

function Topbar () {

	const { toggleNav, closeNav } = NavContextFunction()

	return (
		<div className='topbar'>

		</div>
	)
}

export default Topbar;