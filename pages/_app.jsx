import '../styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App({ Component, pageProps }) {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
