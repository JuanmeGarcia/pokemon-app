import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { GetStaticProps, NextPage, GetStaticPaths } from "next"
import { useState } from "react"
import confetti from 'canvas-confetti'
import { pokeApi } from "../../api"
import { PokemonFull, PokemonList } from "../../interfaces"
import { Layout } from "../../layout"
import { getPokemonInfo, localFavourites } from "../../utils"

interface Props {
    pokemon: PokemonFull
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {

    

    const [isInFavourites, setIsInFavourites] = useState(
        localFavourites.isPokemonInFavourites(pokemon.id)
    )


    const toggleFavourite = () => {
        localFavourites.toggleFavourites(pokemon.id)
        setIsInFavourites(prevIsInFavourites => !prevIsInFavourites)

        if(isInFavourites) return

        confetti({
            zIndex:999,
            particleCount: 150, 
            spread: 120,
            angle: -100,
            drift: 0.5,
            ticks: 150,
            origin: {
                x: 1,
                y: 0
            }
        })
    }

    const pokemonNameArray: string[] = pokemon.name.split('')
    pokemonNameArray[0] = pokemonNameArray[0].toLocaleUpperCase()
    const pokemonName: string = pokemonNameArray.join('')
    return (
        <Layout
            title={pokemonName}
        >
            <Grid.Container
                css={{
                    marginTop: '5px'
                }}
                gap={2}
            >
                <Grid
                    xs={12}
                    sm={4}
                >
                    <Card
                        css={{
                            p: '30px'
                        }}
                    >
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid
                    xs={12}
                    sm={8}
                >
                    <Card>
                        <Card.Header
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: '30px'
                            }}
                        >
                            <Text
                                h1
                                transform="capitalize"
                            >
                                {pokemon.name}
                            </Text>

                            <Button
                                color='gradient'
                                ghost={!isInFavourites}
                                onClick={toggleFavourite}
                            >
                                {isInFavourites
                                    ? 'Sacar de favoritos </3'
                                    : 'Agregar a favoritos <3'
                                }
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text
                                size={30}
                            >
                                Sprites:
                            </Text>

                            <Container
                                direction="row"
                                display="flex"
                            >
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
        const { data }  = await pokeApi.get<PokemonList>('/pokemon?limit=649')
        const pokemons = data.results.map(pokemon =>(
            pokemon.name
        ))
    
        return {
            paths: pokemons.map(name => ({ 
                params: { name }
            })),
            fallback: 'blocking',
        }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const pokemon = await getPokemonInfo(name)

    if(!pokemon){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            pokemon
        },
        revalidate: 86400,
    }
}


export default PokemonByName