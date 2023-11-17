import { SimplePokemon } from '@/pokemons'
import React from 'react'
import { PokemonCard } from './PokemonCard'

interface PokemonGridPorps {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: PokemonGridPorps) => {
    return (
        <div className="flex flex-wrap gap-8 items-center justify-center">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}
