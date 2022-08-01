import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()

    const handleOnClick = () => {
        router.push(`/name/${pokemon.name}`)
    }

    return (
        <Grid
            xs={6}
            sm={4}
            md={3}
            xl={1}
            key={pokemon.id}
        >
            <Card
                isHoverable
                isPressable
                variant='flat'
                onClick={handleOnClick}
            >
                <Card.Body
                    css={{
                        p: 1
                    }}
                >
                    <Card.Image
                        src={pokemon.image}
                        width="100%"
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text
                            transform='capitalize'
                        >
                            {pokemon.name}
                        </Text>
                        <Text>
                            #{pokemon.id}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
