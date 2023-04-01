import '@/styles/globals.css'
import {Open_Sans} from 'next/font/google'

const sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400']
})
export default function App({ Component, pageProps }) {
  return (
    <main className={sans.className}>
    <Component {...pageProps} />
  </main>
  )
}
