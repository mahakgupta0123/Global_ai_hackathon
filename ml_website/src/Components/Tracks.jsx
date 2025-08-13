import React from 'react'

const Tracks = () => {
  return (
    <div>
      <div class="flex justify-center items-center mt-40 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9  border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Tracks</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
    </div>
  )
}

export default Tracks