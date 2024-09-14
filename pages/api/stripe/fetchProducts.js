import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    // Fetch the list of products from Stripe
    const products = await stripe.products.list({
      active: true, // Fetch only active products
      expand: ['data.default_price'], // Expand to include price details
    });

    // Return the list of products
    res.status(200).json(products.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
