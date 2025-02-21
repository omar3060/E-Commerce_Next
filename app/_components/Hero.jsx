import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        All Your Digital Products
        <strong className="font-extrabold text-primary sm:block mt-[20px]">Is One Click Away</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Start Exploring State of the Art Assets Now
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-500 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-primary shadow-sm hover:text-teal-500 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero