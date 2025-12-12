import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-rose-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-rose-600">Wedfinity</h1>
            <p className="text-gray-600">Your Perfect Wedding Platform</p>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Wedfinity</h2>
            <p className="text-xl text-gray-600 mb-8">Plan your perfect wedding with our comprehensive platform</p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Get Started - Count: {count}
            </button>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
