import React from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiService"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const DetailsType = () => {

    const { id, name } = useParams()
    const { store, dispatch } = useGlobalReducer()


    const getdetails = async () => {
        const resp = await pokeApiServices.getOneType(id)
        dispatch({ type: 'load_type_details', payload: resp })
    }

    useEffect(() => {
        getdetails()
    }, [])

    const isFav = store.favoriteTypes.some(p => p.id === id);

    const handleFav = (e) => {
        e.preventDefault();
        dispatch({
            type: "add_favorite_type",
            payload: {
                name: store.detailsType?.name,
                id
            }
        });
    }

    return (

        <div className="container my-3 w-50 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-center">Details for {store.detailsType?.name
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')} type</h3>
            <img className="card-img-top w-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${id}.png`} alt={name} />
            <div className="row">
                <div className="col-12 col-md-6 p-3">
                    <h5>Strong against:</h5>
                    <ul>
                        {store.detailsType?.damage_relations?.double_damage_to?.map((typeObj, index) => (
                            <li key={index}>{typeObj.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h5>Weak against:</h5>
                    <ul>
                        {store.detailsType?.damage_relations?.double_damage_from?.map((typeObj, index) => (
                            <li key={index}>{typeObj.name}</li>
                        ))}
                    </ul>
                </div>
                {store.detailsType?.damage_relations?.no_damage_from?.length > 0 && (
                    <>
                        <div className="col-12 col-md-6 p-3">
                            <h5>Immune to:</h5>
                            <ul>
                                {store.detailsType?.damage_relations?.no_damage_from?.map((typeObj, index) => (
                                    <li key={index}>{typeObj.name}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <div className="text-center"><i className={`btn text-danger ${isFav ? 'fas' : 'far'} fa-heart fa-2x`} onClick={handleFav} /></div>
        </div>
    )
} 