// pages/api/stripe/prices.js
import Stripe from 'stripe';

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // Get the 'starting_after' query parameter for pagination
  const { starting_after } = req.query;

  try {
    const prices = await stripe.prices.list({
      active: true,
      limit: 10, // Set the number of prices to fetch
      starting_after, // Use the starting_after parameter for pagination
      expand: ['data.product'], // Expands product details (to show product names, images, etc.)
    });

    // Return the fetched prices as a response
    res.status(200).json({ prices });
  } catch (error) {
    console.error('Error fetching prices:', error);
    res.status(500).json({ error: 'Failed to fetch prices from Stripe' });
  }
}
