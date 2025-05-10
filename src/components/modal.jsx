
import React from "react"
export const ModalExample = (props) => {


    return (
        //ojo... el modal tiene que tener posicion absoluta, y ponerlo manualmente en donde queremos. TIENE que tener z-index
        <div >
            <h3>modal for {props.name}</h3>
            <span onClick={() => props.hide(false)}>X</span>
        </div>
    )
}