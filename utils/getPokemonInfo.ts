import { pokeApi } from "../api"
import { PokemonFull } from "../interfaces"

export const getPokemonInfo = async (identifier: string) => {

    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${identifier}`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}