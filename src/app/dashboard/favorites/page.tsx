import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'

export const metadata = {
    title: 'Favoritos',
    description: 'Mis pokemons preferidos',
}

export default async function PokemonPage() {
    return (
        <div className="flex flex-col gap-8">
            <span className="text-5xl m-8">
                Mis Pokémons Favoritos <small className="text-blue-600">Global State</small>
            </span>
            <PokemonGrid pokemons={[]} />
        </div>
    )
}
