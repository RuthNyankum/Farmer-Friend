import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../../src/index.css';
import productImage1 from '../../assets/images/pic4.jpg';
import productImage2 from '../../assets/images/pic1.jpg';
import productImage3 from '../../assets/images/pic2.jpg';
import productImage4 from '../../assets/images/pic3.jpg';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const Products = () => {
  return (
    <div className="bg-white font-poppins">
      {/* Product Header */}
      <div className="px-6 py-16 text-center bg-green-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Premium Organic Animal Feed
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4">
          Made from Sustainable Sources
        </h1>
      </div>

      {/* Image Swiper */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Swiper
          modules={[FreeMode, Pagination, Autoplay]} // Enable necessary modules
          slidesPerView={2} // Default: 2 slides per view on desktop
          spaceBetween={20} // Space between slides
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // 3 seconds per slide
            disableOnInteraction: false, // Continue auto-sliding after interaction
          }}
          pagination={{ clickable: true }} // Enable pagination dots
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on mobile (phone mode)
              spaceBetween: 10, // Less space between slides on small screens
            },
            1024: {
              slidesPerView: 2, // Show 2 slides on desktop and larger screens
              spaceBetween: 20, // Space between slides on larger screens
            },
          }}
        >
          {/* Swiper Slides */}
          {[productImage1, productImage2, productImage3, productImage4].map(
            (image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[60vh] rounded-lg overflow-hidden shadow-lg border-4 border-green-500">
                  {/* Added border */}
                  <img
                    src={image}
                    alt={`Product Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* Review Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading for Review Section */}
          <div className="sub-header mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-baskerville">
              What Our Customers Are Saying
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about how our premium organic
              feed has transformed their farming practices.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Testimonial */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <FaQuoteLeft className="text-secondary absolute -top-2 -left-2 text-3xl" />
                <p className="text-xl text-gray-700 italic mb-4 pl-6 pr-6 relative z-10">
                  This feed has worked wonders for my farm. The livestock are
                  healthier, and I've noticed a significant improvement. It's
                  reassuring to know I'm using something both sustainable and
                  effective.
                </p>
                <FaQuoteRight className="text-secondary absolute -bottom-2 right-0 text-3xl" />
              </div>
              <div className="mt-4">
                <p className="font-bold text-gray-800">
                  Maame Yankeh <br />
                  <span className="text-gray-500 text-sm">Farmer</span>
                </p>
                <div className="flex justify-center mt-3 text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="mx-1" />
                  ))}
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <FaQuoteLeft className="text-secondary absolute -top-2 -left-2 text-3xl" />
                <p className="text-xl text-gray-700 italic mb-4 pl-6 pr-6 relative z-10">
                  I've been using this feed for a few months now, and I'm really
                  impressed. My animals are healthier, more active, and I'm
                  seeing better results in the overall quality of the farm.
                </p>
                <FaQuoteRight className="text-secondary absolute -bottom-2 right-0 text-3xl" />
              </div>
              <div className="mt-4">
                <p className="font-bold text-gray-800">
                  Ato <br />
                  <span className="text-gray-500 text-sm">Farmer</span>
                </p>
                <div className="flex justify-center mt-3 text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="mx-1" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
