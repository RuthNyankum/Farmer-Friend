// import React from 'react';
// import 'swiper/swiper-bundle.css'; // Import Swiper CSS
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css'; // Core Swiper CSS
// import 'swiper/css/pagination'; // Pagination CSS
// import 'swiper/css/autoplay'; // Autoplay CSS
// import '../../../src/index.css';

// // Import images
// import productImage1 from '../../assets/images/pic4.jpg';
// import productImage2 from '../../assets/images/pic1.jpg';
// import productImage3 from '../../assets/images/pic2.jpg';
// import productImage4 from '../../assets/images/pic3.jpg';

// const Products = () => {
//   return (
//     <div className="bg-white">
//       {/* Product Header */}
//       <div className="px-6 py-16 text-center bg-green-100">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
//           Our Premium Organic Animal Feed
//         </h2>
//         <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4">
//           Made from Sustainable Sources
//         </h1>
//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           Transforming organic waste into high-quality, eco-friendly feed to
//           support sustainable farming.
//         </p>
//       </div>

//       {/* Image Swiper */}
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* Reduced width */}
//         <Swiper
//           modules={[FreeMode, Pagination, Autoplay]} // Enable necessary modules
//           slidesPerView={2} // Default: Show two slides at a time
//           spaceBetween={20} // Space between slides
//           loop={true} // Enable infinite loop
//           autoplay={{
//             delay: 3000, // 3 seconds per slide
//             disableOnInteraction: false, // Continue auto-sliding after interaction
//           }}
//           pagination={{ clickable: true }} // Enable pagination dots
//           className="w-full"
//           breakpoints={{
//             640: {
//               slidesPerView: 1, // On small screens, show 1 slide at a time
//               spaceBetween: 10, // Smaller space between slides
//               height: '40vh', // Reduced height on mobile
//             },
//             768: {
//               slidesPerView: 2, // On medium screens, show 2 slides at a time
//               spaceBetween: 20, // Default space between slides
//               height: '60vh', // Standard height for medium screens
//             },
//             1024: {
//               slidesPerView: 3, // On larger screens, show 3 slides at a time
//               spaceBetween: 30, // Larger space between slides
//               height: '70vh', // Standard height for large screens
//             },
//           }}
//         >
//           {/* Swiper Slides */}
//           {[productImage1, productImage2, productImage3, productImage4].map(
//             (image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border-4 border-green-500">
//                   {/* Added border */}
//                   <img
//                     src={image}
//                     alt={`Product Slide ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </SwiperSlide>
//             )
//           )}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from 'react';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/pagination'; // Pagination CSS
import 'swiper/css/autoplay'; // Autoplay CSS
import '../../../src/index.css';

// Import images
import productImage1 from '../../assets/images/pic4.jpg';
import productImage2 from '../../assets/images/pic1.jpg';
import productImage3 from '../../assets/images/pic2.jpg';
import productImage4 from '../../assets/images/pic3.jpg';

const Products = () => {
  return (
    <div className="bg-white">
      {/* Product Header */}
      <div className="px-6 py-16 text-center bg-green-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Premium Organic Animal Feed
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4">
          Made from Sustainable Sources
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Transforming organic waste into high-quality, eco-friendly feed to
          support sustainable farming.
        </p>
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

      {/* Testimonial Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* First Testimonial - Customer */}
          <p className="text-xl text-gray-700 italic">
            “This feed has worked wonders for my farm. The livestock are
            healthier, and I’m seeing a noticeable improvement in their milk
            production. It’s great to know I’m using something that’s both
            sustainable and effective. Highly recommend it to any farmer.”
          </p>
          <p className="mt-4 font-bold text-gray-800">
            Jack Thompson <br />
            <span className="text-gray-500">Farmer</span>
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center mt-10">
          {/* Second Testimonial - Farmer Friendly */}
          <p className="text-xl text-gray-700 italic">
            “I've been using this feed for a few months now and I'm really
            impressed. My animals are healthier, they're more active, and I'm
            seeing better results in both the milk yield and overall quality of
            the farm. This is the kind of feed every farmer should be using.”
          </p>
          <p className="mt-4 font-bold text-gray-800">
            Michael Barnes <br />
            <span className="text-gray-500">Farmer</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
