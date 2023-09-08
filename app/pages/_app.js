import GlobalStyle from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Langham Beauty Fest</title>
      <meta name="keywords" content="Langham Beauty Fest" />
      <meta
        id="metaDescription"
        name="description"
        content="Langham Beauty Fest"
      />
      <meta
        name="viewport"
        id="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
