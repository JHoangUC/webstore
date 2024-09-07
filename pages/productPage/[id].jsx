import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

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
          setProduct(data);  // Store product data in state
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  // Slick Slider Settings
  const settings = {
    dots: true,   // Show pagination dots
    infinite: true,   // Enable infinite scrolling
    speed: 500,   // Transition speed in milliseconds
    slidesToShow: 1,   // Number of slides to show
    slidesToScroll: 1,   // Number of slides to scroll at once
  };

  return (
    <div className="container mx-auto p-6 relative">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>

      {/* Image Carousel using React Slick */}
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${product.name} image ${index + 1}`}
              className="w-full h-auto object-contain max-h-[500px] mx-auto"
            />
          </div>
        ))}
      </Slider>

      <p className="mt-6 text-xl font-semibold">
        Price: {(product.unit_amount / 100).toLocaleString('en-CA', {
          style: 'currency',
          currency: 'USD'
        })}
      </p>
    </div>
  );
};

export default ProductPage;
