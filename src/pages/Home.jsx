import React from "react";
import { PokemonCard } from "../components/pokemonCard.jsx";
import { TypeCard } from "../components/typeCard.jsx";
import { ItemCard } from "../components/itemCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store } = useGlobalReducer()
	return (
		<div className="container mt-5">

		<h2>Pokémon</h2>
			<div className="d-flex overflow-auto mb-3">
			{store.pokemons?.results?.map((el,i) => <PokemonCard key={i} name={el.name} url={el.url} />)}
			</div>
			
		<h2>Types</h2>
			<div className="d-flex overflow-auto mb-3">
			{store.types?.results?.map((el,i) => <TypeCard key={i} name={el.name} url={el.url} />)}
			</div>
		<h2>Items</h2>
			<div className="d-flex overflow-auto mb-3">
			{store.items?.results?.map((el,i) => <ItemCard key={i} name={el.name} url={el.url} />)}
			</div>

		</div>
	);
}; 