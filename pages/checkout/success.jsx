/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link';
import { useCart } from '../../context/CartContext'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function CheckoutSuccessPage() {
  const { resetCart } = useCart()

  useEffect(() => {
    resetCart()
  }, [resetCart])

  const {
    query: { sessionId }
  } = useRouter()

  const URL = sessionId ? `/api/stripe/sessions/${sessionId}` : null
  const { data: checkoutSession, error } = useSWR(URL, fetcher)

  if (error) return <div>failed to load the session</div>

  const customer = checkoutSession?.customer_details
  const shippingAddress = checkoutSession?.shipping_details?.address
  const products = checkoutSession?.line_items?.data?.map(item => ({
    ...item.price.product,
    price: item.price.unit_amount,
    quantity: item.quantity
  }))

  const payment =
    checkoutSession?.payment_intent?.charges?.data[0]?.payment_method_details
  const subtotal = checkoutSession?.amount_subtotal
  const total = checkoutSession?.amount_total
  const discount = checkoutSession?.total_details?.amount_discount
  const tax = checkoutSession?.total_details?.amount_tax

  return (
    <div className='bg-white font-mono'>
      <div className='max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h1 className='text-sm font-medium text-indigo-600'>Payment successful</h1>
          <p className='mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
            Thanks for ordering
          </p>
          <p className='mt-2 text-base text-gray-500'>
            We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!
          </p>

          <dl className='mt-12 text-sm font-medium font-mono'>
            <dt className='text-gray-900 font '>Order number</dt>
            <dd className='text-indigo-600 mt-1'>
              {checkoutSession?.payment_intent?.id}
            </dd>
          </dl>
        </div>

        <div className='mt-10 border-t border-gray-200'>
          <h2 className='sr-only'>Your order</h2>

          {products?.map(product => (
            <div key={product.id} className='py-10 border-b border-gray-200 flex space-x-6'>
              <img src={product.images[0]} alt={product.description} className='flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40' />
              <div className='flex-auto flex flex-col'>
                <div>
                  <h4 className='font-medium text-gray-900'>
                    <Link href={`/productPage/${product.id}`}>{product.name}</Link>
                  </h4>
                  <p className='mt-2 text-sm text-gray-600'>{product.description}</p>
                </div>
                <div className='mt-6 flex-1 flex items-end'>
                  <dl className='flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6'>
                    <div className='flex'>
                      <dt className='font-medium text-gray-900'>Quantity</dt>
                      <dd className='ml-2 text-gray-700'>{product.quantity}</dd>
                    </div>
                    <div className='pl-4 flex sm:pl-6'>
                      <dt className='font-medium text-gray-900'>Price</dt>
                      <dd className='ml-2 text-gray-700'>
                        {(product.price / 100).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          {/* Shipping & Billing Information Side-by-Side */}
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:gap-12">
            {/* Shipping Information */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-lg font-medium text-gray-900">Shipping Information</h3>
              <div className="mt-4 text-sm text-gray-600">
                {shippingAddress ? (
                  <>
                    <p>{shippingAddress.line1}</p>
                    {shippingAddress.line2 && <p>{shippingAddress.line2}</p>}
                    <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postal_code}</p>
                    <p>{shippingAddress.country}</p>
                  </>
                ) : (
                  <p>No shipping address provided.</p>
                )}
              </div>
            </div>

            {/* Billing Information */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-lg font-medium text-gray-900">Billing Address</h3>
              <div className="mt-4 text-sm text-gray-600">
                <address className="not-italic">
                  <p><strong>Name:</strong> {customer?.name}</p>
                  <p><strong>Email:</strong> {customer?.email}</p>
                  <p><strong>Country:</strong> {customer?.address?.country}</p>
                  <p><strong>Postal Code:</strong> {customer?.address?.postal_code}</p>
                </address>
              </div>
            </div>
          </div>

          <h3 className='sr-only'>Summary</h3>
          <dl className='space-y-6 border-t border-gray-200 text-sm pt-10'>
            <div className='flex justify-between'>
              <dt className='font-medium text-gray-900'>Subtotal</dt>
              <dd className='text-gray-700'>
                {(subtotal / 100).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}
              </dd>
            </div>
            {discount > 0 && (
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Discount</dt>
                <dd className='text-gray-700'>
                  -{(discount / 100).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}
                </dd>
              </div>
            )}
            <div className='flex justify-between'>
              <dt className='font-medium text-gray-900'>Tax</dt>
              <dd className='text-gray-700'>
                {(tax / 100).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}
              </dd>
            </div>
            <div className='flex justify-between'>
              <dt className='font-medium text-gray-900'>Total</dt>
              <dd className='text-gray-900'>
                {(total / 100).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccessPage
