import React from 'react'

function Contactus() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We’d love to hear your favorite quotes, feedback, or suggestions
          </p>
          <div className="space-y-4">
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
            <div className="w-8 h-1 bg-gray-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            Say Hello
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 rounded-full flex items-center justify-center">
                <div className="w-8 h-1 bg-white"></div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">Email</h3>
              <p className="text-gray-600">hello@bigquotes.example</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">Twitter</h3>
              <p className="text-gray-600">@BigQuotes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">Location</h3>
              <p className="text-gray-600">Worldwide, online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Share Your Words
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Send us your favorite quote—we might feature it next
          </p>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
      </section>
    </div>
  )
}

export default Contactus