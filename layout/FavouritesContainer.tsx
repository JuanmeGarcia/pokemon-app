import { Grid } from '@nextui-org/react'
import { FC } from 'react'

interface Props {
    children: React.ReactNode
}

export const FavouritesContainer: FC<Props> = ({ children }) => {
    return (
        <Grid>
            <Grid.Container
                gap={2}
                direction='row'
                justify="flex-start"
            >
                {children}
            </Grid.Container>
        </Grid>
    )
}
