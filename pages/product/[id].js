import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from '../../components/Card'
import Stripe from 'stripe'

export default function Id({ prices: { data = [] } }) {
  const router = useRouter()
  const id = router.query.id
  const key = router.query.price
  console.log(JSON.stringify(router.query))
  const [products, setProducts] = useState(data)

  const filteredProducts = products.filter(product => product.id === id)

  return (
    <>
      <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
        {filteredProducts.map(price => (
          <Card key={price.id} price={price} />
        ))}
      </div>
      
      <h1>id: {id}</h1>
      <h1>key: {key}</h1>
    </>
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
