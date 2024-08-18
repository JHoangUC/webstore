"use client"
import { useState } from 'react'

import Header from './NavBar copy'
import ShoppingCartSlideOver from './ShoppingCart'

const Layout = ({ children }) => {
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)

  return (
    <>
      <Header setCartSliderIsOpen={setCartSliderIsOpen} />
      <ShoppingCartSlideOver
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
      />
      <main>{children}</main>
    </>
  )
}

export default Layout
