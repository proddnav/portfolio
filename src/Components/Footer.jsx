import React from 'react'

const Footer = () => {
  return (
    <>
      <section id='connect' className="bg-cover">
        <div className="flex flex-col bg-[#252A2F]">
          <div className="container flex flex-col flex-1 px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold md:text-6xl">
                <span className="text-transparent bg-gradient-to-tl bg-clip-text from-blue-500 to-pink-500">Let&apos;s Connect!</span>
              </h1>
              <div className="flex justify-center mt-4 -mx-1.5">
                {/* Twitter Icon */}
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://twitter.com/proddpranav">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z"></path>
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/pranav-chandra-prodduturi/">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor"></path>
                    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor"></path>
                    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor"></path>
                  </svg>
                </a>
                {/* ... (add other SVG icons similarly) ... */}
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-auto">
              <div className="w-full md:px-8 mx-auto overflow-hidden lg:max-w-xl">
                <form className="mt-6">
                  {/* ... (form remains unchanged) ... */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#252A2F]">
        <div className="container p-6 mx-auto sm:flex-row">
          <p className="text-sm text-gray-300 text-center">© Copyright 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
