import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ price }) => {
  const { items, addItem } = useCart()
  const [error, setError] = useState('')
  const { product, unit_amount } = price

  const addItemToCart = (price) => {
    const found = items.find((p) => p.id === price.id);
    if (found) {
      // If the item is found, update the quantity
      addItem({ ...price, quantity: found.quantity + 1 });
      setError('Item quantity updated!');
    } else {
      // If the item is not found, add a new item to the cart
      addItem({ ...price, quantity: 1 });
      setError('Item added to cart!');

    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setError(''), 3000)
    return () => clearTimeout(timeout)
  }, [error])

  return (
    <div className='border-[#bebebe] border-2 p-10 drop-shadow-xl bg-white rounded-xl'>
      
      <div className='relative'>
      <div className='relative mt-4'>
          <h3 className='text-xl font-semibold text-black'>{product.name}</h3>
          <p className='mt-1 mb-3 text-sm font-bold text-gray-700'>{product.description}</p>
        </div>
        <div className='relative w-full h-72 rounded-lg overflow-hidden '
        >
          <Image
            
            src={product.images[0]}
            alt={product.description}
            className='object-scale-down '
            layout='fill'
          />
        </div>

        <div className='absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden'>
          <div
            aria-hidden='true'
            // bg-gradient-to-t from-black opacity-50
            className='absolute inset-x-0 bottom-0 h-36 '
          />

        </div>
      </div>
      <p className='relative text-lg font-semibold text-black font-mono'>
            {(unit_amount / 100).toLocaleString('en-CA',  {
              style: 'currency',
              currency: 'USD'
            })}
          </p>
      <div  className='mt-6 '>
        
        <button
          onClick={e => {
            e.stopPropagation() // Prevent parent Link from triggering
            addItemToCart(price)
          }}
          className='relative flex z-10 bg-[#dfdbdb] border border-transparent rounded-md py-2 px-8  text-sm font-semibold text-gray-900 hover:bg-gray-200'
        >
          Add to Cart<span className='sr-only'>, {product.name}</span>
        </button>
        <div style={{ minHeight: '30px' }}>
        {error && <p  id='updateToCart' className='flex text-lg text-red-400'>{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Card
