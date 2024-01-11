import Layout from '../components/Layout'
import CartProvider from '../context/CartContext'
import FrontPageTop from "../components/FrontPageTop";
import AboutSection from "../components/AboutSection";

import Homepage from "../components/Homepage";
import { useRouter } from 'next/router';


import '../styles/globals.css'

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    
    <CartProvider>
      <Layout>
      {router.pathname === '/' && (
          <>
            <FrontPageTop />
            <AboutSection />
            <Homepage/>
          </>
        )}
       
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
    
  )
}

export default App
