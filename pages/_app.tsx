import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../theme'
import { useScrollRestoration } from '../hooks/useScrollRestoration'

function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router)
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )

}

export default MyApp
