import React from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="w-75" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon logo"/>
				</Link>
				<div className="btn-group">
					
					<button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						Pokémon:
						{store.favoritePokemon?.map((el,i) => <li key={i}><a className="dropdown-item" href="#">{el.name}</a></li> )}
						<li><hr className="dropdown-divider"/></li>
						Types:
						{store.favoriteTypes?.map((el,i) => <li key={i}><a className="dropdown-item" href="#">{el.name}</a></li> )}
						<li><hr className="dropdown-divider"/></li>
						Items:
						{store.favoriteItems?.map((el,i) => <li key={i}><a className="dropdown-item" href="#">{el.name}</a></li> )}
					</ul>
				</div>
			</div>
		</nav>
	);
};