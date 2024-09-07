import { useState, useEffect } from 'react';  // Import React hooks for state management and lifecycle methods
import { useRouter } from 'next/router';  // Import Next.js router for handling dynamic routes
import Card from '../../components/Card';  // Import the Card component to display each product
import Stripe from 'stripe';  // Import Stripe to interact with Stripe API

export default function Id({ prices: { data = [] } }) {
  const router = useRouter();  // Get the Next.js router instance
  const { id, price: key } = router.query;  // Destructure the id and price from the query parameters in the URL
  const [products, setProducts] = useState(data);  // Initialize state for products fetched from the server-side props
  const [filteredProducts, setFilteredProducts] = useState([]);  // Initialize state for products filtered by the dynamic ID

  // useEffect hook to run whenever `id` or `products` change
  useEffect(() => {
    // Only run the filter if the id is available (to prevent errors when id is undefined)
    if (id) {
      console.log('Filtering products with id:', id);  // Log the ID being used for filtering (for debugging)
      
      // Filter the products to match the product ID from the URL
      const filtered = products.filter(product => product.id === id);
      setFilteredProducts(filtered);  // Update the state with the filtered products
    }
  }, [id, products]);  // Dependencies: effect will run again if `id` or `products` change

  // Return a loading message while the id is not yet available from the router (avoids trying to render without it)
  if (!id) return <p>Loading...</p>;

  return (
    <>
      {/* Map through the filtered products and render a Card component for each */}
      <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
        {filteredProducts.map(price => (
          <Card key={price.id} price={price} />  {/* Key is important for list rendering performance */}
        ))}
      </div>
      
      {/* Display the id and price (key) as debugging information */}
      <h1>id: {id}</h1>
      <h1>key: {key}</h1>
    </>
  );
}

// getServerSideProps is used to fetch product data from Stripe before rendering the page
export async function getServerSideProps() {
  // Initialize the Stripe client using the secret key stored in environment variables
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // Fetch a list of prices from Stripe, limiting to 10 and expanding the related product information
  const prices = await stripe.prices.list({
    active: true,  // Only fetch active prices
    limit: 10,  // Limit the number of prices returned to 10
    expand: ['data.product'],  // Expand the product object in the returned data
  });

  // Return the prices as props to be passed into the page component
  return {
    props: {
      prices,  // Pass the prices data to the component as a prop
    },
  };
}
