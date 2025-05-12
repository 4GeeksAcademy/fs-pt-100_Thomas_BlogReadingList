const pokeApiServices = {}

pokeApiServices.getAllPokemon = async () => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!resp.ok) throw new Error("error fetching data")
        const data = await resp.json()
        return data

    } catch (error){
        console.log(error);
    }
}

pokeApiServices.getOnePokemon = async id => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
        if (!resp.ok) throw new Error("error fetching data")
        const data = await resp.json()
        return data

    } catch (error){
        console.log(error);
    }
}

pokeApiServices.getAllTypes = async () => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/type");
        if (!resp.ok) throw new Error("error fetching data")
        const data = await resp.json()
        return data

    } catch (error){
        console.log(error);
    }
}

pokeApiServices.getOneType = async id => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/type/"+id);
        if (!resp.ok) throw new Error("error fetching data")
        const data = await resp.json()
        return data

    } catch (error){
        console.log(error);
    }
}

pokeApiServices.getAllItems = async () => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/item/");
        if (!resp.ok) throw new Error("error fetching data")
        const data = await resp.json()
        return data

    } catch (error){
        console.log(error);
    }
}

pokeApiServices.getOneItem = async id => {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/item/"+id);
        if (!resp.ok) throw new Error("error fetching data")
        const data = await resp.json()
        return data

    } catch (error){
        console.log(error);
    }
}

export default pokeApiServices