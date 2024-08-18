import {Fragment} from 'react'
import {useCart} from "./../../../context/CartContext";
import {checkout} from './../../../lib/checkout'

export default function ShoppingCartSlideOver({open, setCartSliderIsOpen}){
    const {items, removeItem } = useCart()
    const subTotal = items.reduce((acc,curr) => (acc += curr.unit_amount),0)

    const handleCheckout = event => {
        event.preventDefault()
        checkout(items)
    }
  return (
    <div>
        <a href="#"
        className='flex items-center justify-center rounded-lg'
        onClick={handleCheckout}>CHECKOUT</a>
        
        <p className='flex'>{subTotal}</p>
    </div>
    
  )
}

