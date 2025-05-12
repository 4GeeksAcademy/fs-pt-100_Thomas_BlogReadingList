import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ModalExample } from "./modal"
import PropTypes from "prop-types"

export const PokemonCard = ({ name, url }) => {
    const { store, dispatch } = useGlobalReducer()
    let aux = url.split('/') //separamos el texto en todos los lugares donde este el /
    let id = aux[6] //en la posicion 6 del array de aux esta el id
    const [modalShow, setModalShow] = useState(false)

    const [isFav, setIsFav] = useState(false);

    const handleFav = (e) => {
        e.preventDefault();
        const sound = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`)
        sound.play();

        console.log('click on fav')
        setIsFav(prev => !prev);
        dispatch({type: "add_favorite", payload: name})
    }

    return (
        <div className= "card text-center col-sm-6 col-md-4 col-lg-3 m-2 border border-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="card-title">
                      {name
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                </h3>
                <img className="card-img-top w-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                <Link to={'/details/'+id}
                    className=" btn btn-primary"
                >
                    Learn more
                </Link>
                {/* {modalShow && <ModalExample show={modalShow} hide={setModalShow} name={name}/>} */}

                {/* <button onClick={()=>setModalShow(!modalShow)}>{modalShow? 'hide modal' : 'show modal'}</button> */}

                <i className={`btn text-danger ${isFav ? 'fas' : 'far'} fa-heart fa-2x`} onClick={handleFav}/>

            </div>
        </div>
    )
}