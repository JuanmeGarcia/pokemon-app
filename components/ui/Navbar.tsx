import NextLink from 'next/link'
import { useTheme, Text, Grid, Link } from "@nextui-org/react"
import Image from "next/image"
import { FC } from "react"

export const Navbar: FC = () => {

    const { theme } = useTheme()

    return (
        <nav
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingInline: '20px',
                paddingBlock: '10px',
                backgroundColor: theme?.colors.gray50.value
            }}
        >
            <Grid
                css={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <NextLink
                    href='/'
                    passHref
                >
                    <Link 
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                            alt="pikachu"
                            width='100%'
                            height='100%'
                            />
                        <Text color="white" h1>
                            P
                        </Text>
                        <Text color="white" h2>okemon</Text>
                    </Link>
                </NextLink>

            </Grid>
            <NextLink
                href='/favourites'
                passHref
            >
                <Link>
                    <Text color="white" h3>Favoritos</Text>
                </Link>
            </NextLink>
        </nav>
    )
}
