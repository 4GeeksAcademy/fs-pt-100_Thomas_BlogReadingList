export const initialStore=()=>{
  return{
    message: null,
    pokemons: null,
    detailsPokemon: null,
    detailsType: null,
    detailsItem: null,
    types: [],
    items: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "load_pokemon":
      return {
        ...store,
        pokemons: action.payload
      }
    case "load_pokemon_details":
      return {
        ...store,
        detailsPokemon: action.payload
      }
    case "load_types":
      return {
        ...store,
        types: action.payload
      }
    case "load_type_details":
      return {
        ...store,
        detailsType: action.payload
      }
    case "load_items":
      return {
        ...store,
        items: action.payload
      }
    case "load_item_details":
      return {
        ...store,
        detailsItem: action.payload
      }
    case "add_favorite":
      let favorites = []
      if(store.favorites.includes(action.payload)){
        favorites = store.favorites.filter(fav => fav != action.payload)
      }
      else{
        favorites = [...store.favorites, action.payload]
      }
      return {
        ...store,
        favorites: favorites
      };
    default:
      throw Error('Unknown action.');
  }    
}
