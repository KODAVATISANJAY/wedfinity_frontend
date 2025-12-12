const Services = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Our Services</h2>
      <p className="text-center text-gray-600 mb-12">Comprehensive wedding solutions</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['🎂 Catering', '📸 Photography', '🎵 Entertainment', '🌸 Decorations', '🚗 Transportation', '🏨 Venues'].map((s, i) => (
          <div key={i} className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-5xl mb-2">{s.split(' ')[0]}</p>
            <h3 className="text-xl font-bold text-blue-900">{s.split(' ')[1]}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
