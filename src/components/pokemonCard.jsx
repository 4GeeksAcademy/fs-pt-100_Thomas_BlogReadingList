import React from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PokemonCard = ({ name, url }) => {
    const { store, dispatch } = useGlobalReducer()
    let aux = url.split('/')
    let id = aux[6]

    const isFav = store.favoritePokemon.some(p => p.id === id);

    const handleFav = (e) => {
        e.preventDefault();
        const sound = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`)
        sound.play();
        dispatch({
            type: "add_favorite_pokemon",
            payload: { name, id }
        })
    }

    return (
        <div className="card text-center col-sm-6 col-md-4 col-lg-3 m-2 border border-4">
            <div className="d-flex flex-column align-items-center justify-content-center my-3">
                <h3 className="card-title">
                    {name
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                </h3>
                <img className="card-img-top w-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                <Link to={'/details-pokemon/' + id}
                    className=" btn btn-primary"
                >
                    Learn more
                </Link>

                <i className={`btn text-danger ${isFav ? 'fas' : 'far'} fa-heart fa-2x`} onClick={handleFav} />

            </div>
        </div>
    )
}