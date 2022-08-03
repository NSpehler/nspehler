import Head from "next/head"
import { useRouter } from "next/router"
import PlausibleProvider from "next-plausible"

import "../styles/globals.scss"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const canonicalUrl = (process.env.NEXT_PUBLIC_APP_URL + (router.asPath === "/" ? "": router.asPath)).split("?")[0]

  return (
    <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default App
