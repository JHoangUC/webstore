import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { lineItems } = req.body
      if (!lineItems.length) {
        return res.status(400).json({ error: 'Bad Request!' })
      }

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        automatic_tax: { enabled: true },
        success_url: `${req.headers.origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
        cancel_url: req.headers.origin,
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'], // Add the countries you want to allow
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: 0, currency: 'usd' }, // Example shipping rate
              display_name: 'Standard Shipping',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 5 },
                maximum: { unit: 'business_day', value: 7 },
              },
            },
          },
        ],
      })

      return res.status(201).json({ session })

      // If using HTML forms you can redirect here
      // return res.redirect(303, session.url)
    } catch (e) {
      return res.status(e.statusCode || 500).json({ message: e.message })
    }
  }

  res.setHeader('Allow', 'POST')
  res.status(405).end('Method Not Allowed')
}

export default handler
