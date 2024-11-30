import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-4xl w-full space-y-10">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            Have questions or need assistance? We’re here to help!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Reach out to us through any of the following channels.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="text-green-600 w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                  📞
                </span>
                <p className="ml-4 text-gray-800">+123 456 7890</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                  ✉️
                </span>
                <p className="ml-4 text-gray-800">support@farmerfrend.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                  📍
                </span>
                <p className="ml-4 text-gray-800">Not yet available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Connection Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Connect with Us on Google
          </h2>
          <p className="text-gray-600 mb-6">
            For direct communication, feel free to reach out to us via Google.
          </p>
          <a
            href="https://hangouts.google.com/chat" // Replace with your Google Meet or Hangouts link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 bg-primary text-white rounded-md shadow hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Connect with us on Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
