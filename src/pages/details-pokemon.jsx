import React from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiService"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const DetailsPokemon = () => {

    const {id, name} = useParams()
    const {store, dispatch} = useGlobalReducer()


    const getdetails = async () => {
        const resp = await pokeApiServices.getOnePokemon(id)
        dispatch({type: 'load_pokemon_details', payload: resp})
    }

    useEffect(()=>{
        getdetails()
    },[])


    return (

        <div className="container my-3 w-50 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-center">Details for {store.detailsPokemon?.name
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}</h3>
            <img className="card-img-top w-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
            <div className="row">
                <div className="col-12 col-md-6 p-3">
                    <h5>Type(s)</h5>
                    <ul>
                        {store.detailsPokemon?.types?.map((typeObj, index) => (
                            <li key={index}>{typeObj.type.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h5>Size</h5>
                    <ul>
                        <li>Height: {store.detailsPokemon?.height} cm</li>
                        <li>Weight: {store.detailsPokemon?.weight} kg</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h5>Abilitie(s)</h5>
                    <ul>
                        {store.detailsPokemon?.abilities?.map((abilityObj, index) => (
                            <li key={index}>{abilityObj.ability.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h5>Cry</h5>
                    <p className="text-center"><i
                        className="fa fa-2x fa-volume-up"
                        style={{ cursor: 'pointer' }}
                        onClick={() => new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`).play()}
                    /></p>
                </div>
            </div>
        </div>
    )
} 