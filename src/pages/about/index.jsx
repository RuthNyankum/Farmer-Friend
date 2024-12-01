// import React from 'react';
// import vid from '../../assets/video/vid1.mp4'; // Ensure this path is correct

// const About = () => {
//   return (
//     <div className="relative">
//       {/* Main Container with Flexbox */}
//       <div className="flex items-center justify-between px-6 py-16 max-w-7xl mx-auto">
//         {/* Video Section */}
//         <div className="w-full md:w-1/2">
//           <video
//             src={vid}
//             controls
//             autoPlay
//             muted
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Content Section positioned on the right small side of the video */}
//         <div className="absolute top-0 right-0 w-1/4 p-6 text-white z-10">
//           <div>
//             <h3 className="text-xl font-semibold">
//               Slow Flowers’ Floral Insights
//             </h3>
//             <h1 className="text-4xl font-bold mt-4">
//               Dried flowers are having a renaissance
//             </h1>
//             <p className="mt-4">
//               This awareness has been stimulated by sustainable sourcing
//               practices and the desire on the part of North American flower
//               growers to “extend the season” beyond the last frost.
//             </p>
//             <button className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import vid from '../../assets/video/vid1.mp4';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto font-poppins">
        {/* Left content: Title */}
        <div className="max-w-lg text-center md:text-left">
          <h3 className="text-xl font-semibold text-primary">ABOUT US</h3>
          <h1 className="text-4xl font-bold mt-4">
            We provide high-quality animal feed
          </h1>
        </div>

        {/* Right content: Description */}
        <div className="max-w-3xl mt-8 md:mt-0 md:ml-12">
          <p className="text-sm md:text-xl text-center md:text-left text-gray-600">
            At FarmerFrend, we are all about making animal feed more affordable
            and sustainable. We use Black Soldier Fly larvae along with other
            waste materials to create high-quality feed, helping farmers cut
            down on costs. By turning organic waste into something useful, we
            are not just saving money – we are also doing our part to make
            farming more eco-friendly. It is all about finding smarter, more
            sustainable ways to support farmers and help them grow.
          </p>
        </div>
      </div>

      <div>
        {/* Main Container with Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-8 max-w-7xl mx-auto">
          {/* Video Section on the Left */}
          <div className="w-full md:w-1/2">
            <video
              src={vid}
              controls
              autoPlay
              muted
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content Section on the Right */}
          <div className="w-full md:w-1/2 pl-8 mt-8 md:mt-0">
            <div className="relative z-10">
              <h3 className="text-2xl text-primary font-semibold">
                FarmerFrend Insights
              </h3>
              <h1 className="text-4xl font-bold text-gray-800 mt-4">
                Sustainable Solutions and Eco-Friendly Practices
              </h1>
              <p className="text-sm md:text-xl mt-4 text-gray-600">
                FarmerFrend offers sustainable feed solutions, helping farmers
                save costs, promote eco-friendly practices, and stay ahead with
                innovative agriculture using Black Soldier Fly larvae.
              </p>
              <button className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            FarmerFrend’s Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: '🐖',
                title: 'Sustainable Feed Production',
                description:
                  'We produce affordable, high-quality animal feed using Black Soldier Fly larvae and organic waste.',
              },
              {
                icon: '🌱',
                title: 'Eco-Friendly Practices',
                description:
                  'Our methods focus on reducing waste and promoting environmentally responsible farming solutions.',
              },
              {
                icon: '💡',
                title: 'Innovative Farming Solutions',
                description:
                  'We introduce innovative, cost-effective approaches to help farmers stay ahead in agriculture.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl">{service.icon}</div>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  {service.title}
                </h4>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
