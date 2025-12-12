const Gallery = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Our Wedding Gallery</h2>
      <p className="text-center text-gray-600 mb-12">Beautiful moments from celebrations</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(9).fill(0).map((_, i) => (
          <div key={i} className="bg-gradient-to-br from-blue-300 to-cyan-300 h-64 rounded-xl shadow-lg hover:shadow-2xl transition flex items-center justify-center">
            <p className="text-6xl">📸</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Gallery;
