import { createContext, useContext, useState } from 'react'

const NavContext = createContext({})

export function NavContextFunction () {
	return (
		useContext(NavContext)
	)
}

export function NavContextProvider ({ children }) {
	
	const [ toggleNav, setToggleNav ] = useState(false)

	function openNav () {
		setToggleNav(true)
	}

	function closeNav () {
		setToggleNav(false)
	}

	return (
		<NavContext.Provider value={{ toggleNav, openNav, closeNav }}>
			{ children }
		</NavContext.Provider>
	)
}