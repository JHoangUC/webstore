import Stripe from 'stripe';
import NodeCache from 'node-cache';

// Set up NodeCache (with a TTL of 10 minutes )
const cache = new NodeCache({ stdTTL: 600, checkperiod: 320 }); // Cache TTL is 10 minutes

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Get the product ID from the URL query parameters
  const { id } = req.query;

  // Check if the product data is in the cache
  const cachedProduct = cache.get(id);
  if(cachedProduct){
    // If cached data is found, return it
    return res.status(200).json(cachedProduct)
  }

  try {
    // Fetch the product details from Stripe using the product ID
    const product = await stripe.products.retrieve(id, {
      expand: ['default_price'], // Expand to include the price
    });
    // Check if the product exists, if not return 404
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Fetch additional images from metadata
    const additionalImages = [];
    if (product.metadata.image_1) additionalImages.push(product.metadata.image_1);
    if (product.metadata.image_2) additionalImages.push(product.metadata.image_2);
    if (product.metadata.image_3) additionalImages.push(product.metadata.image_3);

    // Combine Stripe's main image with metadata images (only if main image exists)
    const images = product.images.length > 0 ? [product.images[0], ...additionalImages] : [...additionalImages];

    // Create the response object
    const responseData = { ...product, images };

    // Store the response in the cache
    cache.set(id, responseData);

    // Return the product data, including the images array
    res.status(200).json(responseData);
  } catch (error) {
    // If there's an error (e.g., invalid ID or Stripe API issue), log it and return an error response
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}
