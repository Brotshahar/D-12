import React, { useState , useEffect } from 'react'
import QuotesCard from './QuotesCard'

const url = "https://dummyjson.com/quotes";


function Quotes() {
  const [qoutes, setQoutes] = useState([]);

  async function getQoutes() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setQoutes(data.quotes);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  getQoutes();
}, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tight">
            Explore Quotes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A collection of impactful words to motivate, uplift, and inspire
          </p>
          <div className="space-y-4">
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
            <div className="w-8 h-1 bg-gray-300 mx-auto"></div>
          </div>
        </div>
      </section>
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
          {qoutes.map((qoute) => (
            <div key={qoute.id} className="basis-full sm:basis-[48%] lg:basis-[31%]">
              <QuotesCard qoute={qoute} />
            </div>
          ))}
        </div>
      </section>
      {/* Quotes Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            Featured Selections
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <figure className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <blockquote className="text-gray-900 text-lg leading-relaxed">“The only way to do great work is to love what you do.”</blockquote>
              <figcaption className="mt-4 text-gray-500">— Steve Jobs</figcaption>
            </figure>
            <figure className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <blockquote className="text-gray-900 text-lg leading-relaxed">“In the middle of difficulty lies opportunity.”</blockquote>
              <figcaption className="mt-4 text-gray-500">— Albert Einstein</figcaption>
            </figure>
            <figure className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <blockquote className="text-gray-900 text-lg leading-relaxed">“What we think, we become.”</blockquote>
              <figcaption className="mt-4 text-gray-500">— Buddha</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Keep Reading
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Return each day for a fresh dose of perspective and positivity
          </p>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
      </section>
    </div>
  )
}

export default Quotes