import Stripe from 'stripe'
import Card from '../components/Card'
import { useState } from 'react'
// import Link from 'next/link';



require('dotenv').config();

const HomePage = ({ prices: { data = [], has_more } }) => {
  const [products, setProducts] = useState(data)//using data to append products
  const [hasMore, setHasMore] = useState(has_more) //checking if Stripe has more products

  const lastProductId = products[products.length - 1]?.id

  const loadMore = async () => {
    if (!hasMore || !lastProductId) return

    try {
      const { prices } = await fetch(
        `/api/stripe/prices?starting_after=${lastProductId}`
      ).then(res => res.json())
      if (prices.data) {
        setProducts(products => [...products, ...prices.data])
        setHasMore(prices.has_more)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    
    <div className='bg-[#f5f5f5]'>

      <div className='max-w-2xl mx-auto p-4 sm:p-8 lg:max-w-7xl'>

        <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>

          {products.map(price => (
          //   <Link href={`/product/${price.id}`} key={price.id}  >
          // <div style={{ cursor: 'pointer' }}>
            <Card key={price.id} price={price} />
          // </div>
          //  </Link> 
          ))}
          
        </div>

        <button
          onClick={loadMore}
          disabled={!hasMore}
          className='mt-10 w-full bg-sky-100 rounded-md py-2 px-8 text-sm font-medium text-sky-900 hover:bg-sky-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-sky-100'
        >
          Load more
        </button>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  
  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product']
  })

  return {
    props: {
      prices
    }
  }
}

export default HomePage
