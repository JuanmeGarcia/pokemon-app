import { Grid } from '@nextui-org/react';
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { PokemonCard } from '../components/pokemons/PokemonCard';
import { Pokemon, PokemonList } from '../interfaces';
import { Layout } from '../layout'


interface Props {
  pokemons: Pokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {


  const renderPokemons = pokemons.map(pokemon =>(
    <PokemonCard 
      key={pokemon.id}
      pokemon={pokemon}
    />
  ))
  
  return (
    <Layout title='Pokemon main page'>
      <Grid.Container
        gap={2}
        justify='flex-start'
      >
        {renderPokemons}
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  
  const { data }  = await pokeApi
    .get<PokemonList>('/pokemon?limit=649');
  
  const pokemons: Pokemon[] = []

  data.results.forEach((pokemon, index) => {
    const url =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`

    const newPokemon: Pokemon = {
      name: pokemon.name,
      url: pokemon.url,
      id: index + 1,
      image: url,
    }

    pokemons.push(newPokemon)
  })

  return {
    props: {
      pokemons
    }
  }
}

export default Home

