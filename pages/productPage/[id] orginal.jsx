import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart } from '../../context/CartContext'
import Image from 'next/image'


const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { items, addItem } = useCart()

  const addItemToCart = (price) => {
    const found = items.find((p) => p.id === price.id);
    if (found) {
      // If the item is found, update the quantity
      addItem({ ...price, quantity: found.quantity + 1 });
      setError('Item quantity updated!');
    } else {
      // If the item is not found, add a new item to the cart
      addItem({ ...price, quantity: 1 });
      setError('Item added to cart!');

    }
  };

  useEffect(() => {
    if (id) {
      fetch(`/api/stripe/products/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched product data:', data); // Debug product data

          setProduct(data);  
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Handle displaying the price, ensure default_price is available
  const price = product.default_price
    ? {
        ...product.default_price,
        product: product, // Pass the full product object with images and other metadata
      }
    : null;

    //used to handle the difference between string and object data
  const formattedPrice = product.default_price
    ? (product.default_price.unit_amount / 100).toLocaleString('en-CA', {
        style: 'currency',
        currency: 'USD',
      })
    : 'Price unavailable';

  return (
    <div className="container mx-auto mt-20 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Carousel */}
        <div>
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index} className="relative w-full h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`${product.name} image ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            ))}
          </Slider>
        </div>

        {/* Product Information */}
        <div>
          <div className="p-6 bg-[#f7f1f1] shadow-lg rounded-lg lg:max-w-xl ">

            <h1 className="text-5xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-gray-500 font-bold leading-relaxed">{product.description}</p>
            <p className="mt-8 text-2xl font-semibold text-green-600">
              Price: {formattedPrice}
            </p>
            <button
            onClick={e => {
              e.stopPropagation() // Prevent parent Link from triggering
              addItemToCart(price)
              window.location.reload()
            }}
            className='hover:scale-105 bg-[#bebebe]  shadow-lg border border-transparent rounded-md py-3 px-10 text-sm font-bold text-white hover:shadow-2xl hover:from-green-500 hover:to-blue-600 transition-all duration-200'
          >
            Add to Cart<span className='sr-only'>, {product.name}</span>
          </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ProductPage;
