import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"


interface Props {
    favouritesPokemons: number[]
}

export const FavouritePokemonCard: FC<Props> = ({ favouritesPokemons }) => {

    const router = useRouter()

    const onFavouriteClick = (id: number) => {
        router.push(`pokemon/${id}`)
    }

    const renderPokemons = favouritesPokemons.map(pokemon => (
        <Grid
            key={pokemon}
            xs={6}
            sm={3}
            md={2}
            xl={1}
        >
            <Card
                isHoverable
                isPressable
                onPress={() => onFavouriteClick(pokemon)}
                css={{
                    padding: 10
                }}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
                    width={'100%'}
                />
            </Card>
        </Grid>
    ))

    return (
        <>
            {renderPokemons}
        </>
    )
}
