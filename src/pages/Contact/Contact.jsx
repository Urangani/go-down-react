import React from 'react';

const Contact = () => {
  return (
    <main className="bg-gradient-to-b from-gray-200 via-green-200 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+27 71 533 6706 / +27 64 502 8037</span>
            </div>
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>info@godownherbs.co.za</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Send Message</button>
          </form>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Contact;
