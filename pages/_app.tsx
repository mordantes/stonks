
import type { AppProps } from 'next/app'
import '../styles/bootstrap.min.css'
import '../styles/bootstrap.css'
import '../styles/styles.css'
import { MainContainer } from '../components/container'
import { ResponsiveNavbar } from '../components/common/navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <ResponsiveNavbar />
      <Component {...pageProps} />
    </MainContainer>
  )
}
