import '@/styles/index.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <title>appsec asia</title>
        <link rel="icon" href="/icon-appsecasia.png" sizes="20px" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
