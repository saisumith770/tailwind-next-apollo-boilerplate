import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { generateClient } from '../apollo/generateClient'

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

/**
 * @description
 * Updated the App so that it enables pages to use multiple layouts and preserve their state.
 */
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)// Use the layout defined at the page level, if available

  return (
    <ApolloProvider client={generateClient()}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}