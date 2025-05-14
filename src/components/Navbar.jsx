import React from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	const handleDeletePokemon = id => {
		dispatch({
			type: "delete_favorite_pokemon",
			payload: { id }
		})
	}

	const handleDeleteType = id => {
		dispatch({
			type: "delete_favorite_type",
			payload: { id }
		})
	}

	const handleDeleteItem = id => {
		dispatch({
			type: "delete_favorite_item",
			payload: { id }
		})
	}

	let sumFavorites = store.favoritePokemon.length + store.favoriteTypes.length + store.favoriteItems.length 

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="w-75" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon logo" />
				</Link>
				<div className="btn-group">

					<button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-light text-danger" >{sumFavorites}</span>
					</button>
					<ul className="dropdown-menu">
						<li><h6 className="dropdown-header">Pokémon</h6></li>
						{store.favoritePokemon?.map((el, i) =><li key={i}><div className="dropdown-item d-flex justify-content-between align-items-center"><Link className="dropdown-item text-center" to={'/details-pokemon/' + el.id}>{el?.name.split(/[\s-]/)
							.map(word => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ')}</Link><span onClick={() => handleDeletePokemon(el.id)} className="fas fa-trash text-secondary"></span></div></li>)}
						<li><hr className="dropdown-divider" /></li>
						<li><h6 className="dropdown-header">Types</h6></li>
						{store.favoriteTypes?.map((el, i) => <li key={i}><div className="dropdown-item d-flex justify-content-between align-items-center"><Link className="dropdown-item text-center" to={'/details-type/' + el.id}>{el?.name.split(/[\s-]/)
							.map(word => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ')}</Link><span onClick={() => handleDeleteType(el.id)} className="fas fa-trash text-secondary"></span></div></li>)}
						<li><hr className="dropdown-divider" /></li>
						<li><h6 className="dropdown-header">Items</h6></li>
						{store.favoriteItems?.map((el, i) => <li key={i}><div className="dropdown-item d-flex justify-content-between align-items-center"><Link className="dropdown-item text-center" to={'/details-item/' + el.id}>{el?.name.split(/[\s-]/)
							.map(word => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ')}</Link><span onClick={() => handleDeleteItem(el.id)} className="fas fa-trash text-secondary"></span></div></li>)}
					</ul>
				</div>
			</div>
		</nav>
	);
};