export const initialStore=()=>{
  return{
    message: null,
    pokemons: null,
    details: null,
    types: [],
    favorites: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "load_pokemon":
      return {
        ...store,
        pokemons: action.payload
      }
    case "pokemon_details":
      return {
        ...store,
        details: action.payload
      }
    case "load_types":
      return {
        ...store,
        types: action.payload
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
      }
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
