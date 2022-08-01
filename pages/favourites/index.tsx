import { Card, Grid } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { FavouritePokemonCard } from "../../components/pokemons/FavouritePokemonCard"
import { NoFavourites } from "../../components/ui"
import { FavouritesContainer, Layout } from "../../layout"
import { localFavourites } from "../../utils"

const Favourites = () => {

  const [
    favouritesPokemons,
    setFavouritePokemons
  ] = useState<number[]>([])

  useEffect(()=>{
    setFavouritePokemons(localFavourites
      .pokemons())
  }, [])



  return (
    <Layout
      title="Pokemons - Favourites"
    >
      {favouritesPokemons.length <= 0
        ? <NoFavourites />
        : (
          <FavouritesContainer>
            <FavouritePokemonCard 
              favouritesPokemons={favouritesPokemons}
            />
          </FavouritesContainer>
        )
      }
    </Layout>
  )
}

export default Favourites