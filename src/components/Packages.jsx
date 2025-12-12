import React from 'react';

const Packages = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Wedding Packages</h2>
      <p className="text-center text-gray-600 mb-12">Choose the perfect package for your special day</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Bronze', price: '₹5,00,000', icon: '💎', items: ['Venue', 'Catering for 100', 'Photography (4 hours)', 'Decorations'] },
          { name: 'Silver', price: '₹10,00,000', icon: '👑', items: ['Premium Venue', 'Catering for 200', 'Photography + Video', 'Decorations + DJ', 'Transportation'] },
          { name: 'Gold', price: '₹20,00,000', icon: '✨', items: ['Luxury Venue', 'Premium Catering 300+', 'Photography + 4K Video', 'Full Decorations', 'DJ + Entertainment', 'Bridal Suite'] }
        ].map((pkg, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-5xl mb-4 text-center">{pkg.icon}</div>
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{pkg.name}</h3>
            <p className="text-3xl font-bold text-cyan-500 text-center mb-6">{pkg.price}</p>
            <ul className="space-y-2 mb-8">
              {pkg.items.map((item, j) => <li key={j} className="text-gray-700 flex items-center gap-2"><span className="text-blue-500">✓</span> {item}</li>)}
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">Select Package</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
