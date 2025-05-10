import React from "react";
import { useState } from "react";
import { PokemonCard } from "../components/pokemonCard.jsx";
import { TypeCard } from "../components/typeCard.jsx";
import { LocationCard } from "../components/locationCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ModalExample } from "../components/modal.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [modalShow, setModalShow] = useState(false)
	return (
		<div className="container mt-5">



		{/* <button onClick={()=>setModalShow(!modalShow)}>{modalShow? 'hide modal' : 'show modal'}</button>

		{modalShow && <ModalExample show={modalShow} hide={setModalShow}/>} */}
		<h2>Pokémon</h2>
			<div className="d-flex overflow-auto mb-3">
			{store.pokemons?.results?.map((el,i) => <PokemonCard key={i} name={el.name} url={el.url} />)}
			</div>
		<h2>Types</h2>
			<div className="d-flex overflow-auto mb-3">
			{store.pokemons?.results?.map((el,i) => <TypeCard key={i} name={el.name} url={el.url} />)}
			</div>
		<h2>Locations</h2>
			<div className="d-flex overflow-auto mb-3">
			{store.pokemons?.results?.map((el,i) => <LocationCard key={i} name={el.name} url={el.url} />)}
			</div>

		</div>
	);
}; 