import Head from 'next/head'
import { ThemeProvider } from 'react-bootstrap'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { wrapper } from 'redux/store'

import '../styles/globals.sass'

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true })
}

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  url: string
  emotionCache?: EmotionCache
  Component: NextComponentType
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider breakpoints={['xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

const wrappedApp = wrapper.withRedux(MyApp)
export default wrappedApp
