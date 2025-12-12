const Testimonials = () => (
  <section className="py-20 px-4 bg-blue-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Happy Couples</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Priya & Arjun', 'Neha & Vikram', 'Ananya & Rohan'].map((name, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 mb-4">"Wedfinity made our wedding planning perfect! Highly recommended."</p>
            <p className="font-bold text-blue-900">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;
