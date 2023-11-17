import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'

export const metadata = {
    title: '151 Pokemons',
    description: '151 Pokemons',
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json())

    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    return pokemons
}

export default async function PokemonPage() {
    const pokemons = await getPokemons(151)
    return (
        <div className="flex flex-col gap-8">
            <span className="text-5xl m-8">
                Listado de Pokémons <small>estático</small>
            </span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
