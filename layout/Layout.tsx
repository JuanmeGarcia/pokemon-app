import Head from 'next/head'
import React, { useEffect } from 'react'
import { FC } from 'react'
import { Navbar } from '../components/ui'


interface Props {
  children: React.ReactNode,
  title?: string
}
const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title = 'PokemonApp' }): JSX.Element => {

  useEffect(()=>{
    console.log(window.location.origin)
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Juan Garcia Carballo' />
        <meta name='description' content={`###Info del pokemon: ${title}`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/assets/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>
    </>
  )
}
