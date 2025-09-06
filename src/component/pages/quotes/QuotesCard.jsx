import React from 'react'

function QuotesCard({qoute}) {
  return (
    <figure className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-black"
          aria-hidden="true"
        >
          <path d="M7.17 6.17C5.36 7.34 4 9.39 4 12c0 2.76 2.24 5 5 5 1.66 0 3-1.34 3-3s-1.34-3-3-3c-.35 0-.69.06-1 .17.09-1.28.77-2.41 2-3.17l-1.83-1.83zm9 0C14.36 7.34 13 9.39 13 12c0 2.76 2.24 5 5 5 1.66 0 3-1.34 3-3s-1.34-3-3-3c-.35 0-.69.06-1 .17.09-1.28.77-2.41 2-3.17l-1.83-1.83z" />
        </svg>
      </div>
      <blockquote className="text-lg md:text-xl font-semibold text-black leading-snug text-center">
        {qoute.quote}
      </blockquote>
      <figcaption className="mt-3 flex items-center justify-center gap-2 text-gray-600 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-gray-600"
          aria-hidden="true"
        >
          <path d="M12 12c2.761 0 5-2.686 5-6 0-3.314-2.239-6-5-6S7 2.686 7 6c0 3.314 2.239 6 5 6zm0 2c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5z" />
        </svg>
        <span>{qoute.author}</span>
      </figcaption>
    </figure>
  )
}

export default QuotesCard