import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tight">
            About This Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Curated quotes to inspire, comfort, and challenge—presented with clarity and care
          </p>
          <div className="space-y-4">
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
            <div className="w-8 h-1 bg-gray-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            Our Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Curation</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked quotes for quality, relevance, and timeless resonance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                A minimalist experience that lets every word stand out
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 rounded-full flex items-center justify-center">
                <div className="w-8 h-1 bg-white"></div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Context</h3>
              <p className="text-gray-600 leading-relaxed">
                Thoughtful presentation to deepen meaning and reflection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            The Power of Words
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            We believe the right quote at the right time can change your day
          </p>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
      </section>
    </div>
  )
}

export default About