export const initialStore=()=>{
  return{
    message: null,
    pokemons: null,
    detailsPokemon: null,
    detailsType: null,
    detailsItem: null,
    types: [],
    items: [],
    favoritePokemon: [],
    favoriteTypes: [],
    favoriteItems: [],
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
    case "add_favorite_pokemon":
      let favoritePokemon = []
      if(store.favoritePokemon.includes(action.payload)){
        favoritePokemon = store.favoritePokemon.filter(fav => fav != action.payload)
      }
      else{
        favoritePokemon = [...store.favoritePokemon, action.payload]
      }
      return {
        ...store,
        favoritePokemon: favoritePokemon
      };
    default:
      throw Error('Unknown action.');
  }    
}
