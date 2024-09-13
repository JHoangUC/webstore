import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
import Stripe from 'stripe';

export default function Id({ prices: { data = [] } }) {
  const router = useRouter();
  const { id, price: key } = router.query;
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (id) {
      console.log('Filtering products with id:', id);

      // Filter products based on the dynamic id
      const filtered = products.filter(product => product.id === id);
      setFilteredProducts(filtered);
    }
  }, [id, products]);

  if (!id) return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-2xl text-gray-700">Loading...</p>
    </div>
  );

  if (filteredProducts.length === 0) return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-2xl text-gray-700">No products found for the given ID.</p>
    </div>
  );

  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Product Grid */}
      <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {filteredProducts.map((price) => (
          <Card key={price.id} price={price} />
        ))}
      </div>

      {/* Debugging Information (optional) */}
      <div className="mt-12">
        <h2 className="text-lg font-bold">Debug Info:</h2>
        <p>id: {id}</p>
        <p>key: {key}</p>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // Fetch the list of prices, expanding the associated product information
  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product'],  // Expand the associated product details
  });

  return {
    props: {
      prices, // Pass the prices and associated product data to the frontend
    },
  };
}

