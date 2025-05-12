import React from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiService"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const DetailsItem = () => {

    const {id} = useParams()
    const {store, dispatch} = useGlobalReducer()

    let name = store.detailsItem?.name


    const getdetails = async () => {
        const resp = await pokeApiServices.getOneItem(id)
        dispatch({type: 'load_item_details', payload: resp})
    }

    useEffect(()=>{
        getdetails()
    },[])


    return (

        <div className="container my-3 w-50 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-center">Details for {store.detailsItem?.name
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}</h3>
            <img className="card-img-top w-25" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`} alt={name} />
            <div className="row">
                <div className="col-12 col-md-6 p-3">
                    <h5>Description</h5>
                    <ul>
                        {store.detailsItem?.flavor_text_entries[0].text}
                    </ul>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h5>Attributes</h5>
                    <ul>
                        {store.detailsItem?.attributes?.map((attributeObj, index) => (
                            <li key={index}>{attributeObj.name.replaceAll("-"," ")}</li>
                        ))}
                    </ul>
                </div>
            </div> 
        </div>
    )
} 