import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Get the product ID from the URL query parameters
  const { id } = req.query;

  try {
    // Fetch the product details from Stripe using the product ID
    const product = await stripe.products.retrieve(id);

    // Check if the product exists, if not return 404
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Fetch additional images from metadata
    const additionalImages = [];
    if (product.metadata.image_1) additionalImages.push(product.metadata.image_1);
    if (product.metadata.image_2) additionalImages.push(product.metadata.image_2);
    if (product.metadata.image_3) additionalImages.push(product.metadata.image_3);

    // Combine Stripe's main image with metadata images
    const images = [product.images[0], ...additionalImages];

    // Return the product data, including the images array
    res.status(200).json({ ...product, images });  // Include images in the response
  } catch (error) {
    // If there's an error (e.g., invalid ID or Stripe API issue), log it and return an error response
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}
