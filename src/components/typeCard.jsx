import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ModalExample } from "./modal"
import PropTypes from "prop-types"

export const TypeCard = ({ name, url }) => {
    const [modalShow, setModalShow] = useState(false)
    let aux = url.split('/') //separamos el texto en todos los lugares donde este el /
    let id = aux[6] //en la posicion 6 del array de aux esta el id

    // console.log(id)

    const [isFav, setIsFav] = useState(false);

    const handleFav = () => {
        console.log('click on fav')
        setIsFav(prev => !prev);
    }

    return (
        <div className= "card text-center col-sm-6 col-md-4 col-lg-3 m-2 border border-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="card-title">{name
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                </h3>
                <img className="card-img-top w-50 my-5" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${id}.png`} alt={name} />
                <Link to={'/details-type/'+id}
                    className=" btn btn-primary"
                >
                    Learn more
                </Link>

                <i className={`btn text-danger ${isFav ? 'fas' : 'far'} fa-heart fa-2x`} onClick={handleFav}/>

            </div>
        </div>
    )
}