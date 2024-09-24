import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch all prices and associated product data
      fetch('/api/stripe/prices')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch product and price data');
          }
          return response.json();
        })
        .then((data) => {
          // Find the product based on the ID
          const filteredProduct = data.data.find(
            (price) => price.product.id === id
          );

          if (filteredProduct) {
            // Set the combined product and price details
            setProduct({
              ...filteredProduct.product,
              unit_amount: filteredProduct.unit_amount,
            });
          } else {
            throw new Error('Product not found');
          }
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

  return (
    <div className="container mx-auto mt-20 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Carousel */}
        <div>
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                  className="object-scale-down w-full h-full max-h-[500px] rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          {product.unit_amount ? (
            <p className="mt-8 text-2xl font-semibold text-green-600">
              Price: {(product.unit_amount / 100).toLocaleString('en-CA', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          ) : (
            <p className="mt-8 text-red-600">Price unavailable</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        <p className="border-t pt-4">Designs by Khoi</p>
        <p className="mt-2">&copy; 2024 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;