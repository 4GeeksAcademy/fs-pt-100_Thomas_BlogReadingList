export const initialStore = () => {
  return {
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
  switch (action.type) {
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
      const pokemonExists = store.favoritePokemon.some(fav => fav.id === action.payload.id);
      let favoritePokemon;
      if (pokemonExists) {
        favoritePokemon = store.favoritePokemon.filter(fav => fav.id !== action.payload.id);
      }
      else {
        favoritePokemon = [...store.favoritePokemon, action.payload];
      }
      return {
        ...store,
        favoritePokemon
      };
    case "add_favorite_type":
      const typeExists = store.favoriteTypes.some(fav => fav.id === action.payload.id);
      let favoriteTypes;
      if (typeExists) {
        favoriteTypes = store.favoriteTypes.filter(fav => fav.id !== action.payload.id);
      }
      else {
        favoriteTypes = [...store.favoriteTypes, action.payload];
      }
      return {
        ...store,
        favoriteTypes
      };
    case "add_favorite_item":
      const itemExists = store.favoriteItems.some(fav => fav.id === action.payload.id);
      let favoriteItems;
      if (itemExists) {
        favoriteItems = store.favoriteItems.filter(fav => fav.id !== action.payload.id);
      }
      else {
        favoriteItems = [...store.favoriteItems, action.payload];
      }
      return {
        ...store,
        favoriteItems
      };
    case "delete_favorite_pokemon":
      return {
        ...store,
        favoritePokemon: store.favoritePokemon.filter(fav => fav.id !== action.payload.id)
      };
    case "delete_favorite_type":
      return {
        ...store,
        favoriteTypes: store.favoriteTypes.filter(fav => fav.id !== action.payload.id)
      };
    case "delete_favorite_item":
      return {
        ...store,
        favoriteItems: store.favoriteItems.filter(fav => fav.id !== action.payload.id)
      };
    default:
      throw Error('Unknown action.');
  }
}
