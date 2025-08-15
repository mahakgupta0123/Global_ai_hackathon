import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-red-400 rounded-t-4xl">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Changed from md:flex to flex to make it always side-by-side */}
        <div className="flex justify-between items-start">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/About" className="flex items-center mr-22">
              <img
                src="./public/logo.png"
                className="h-30 w-30 sm:h-20 sm:w-20 md:h-34 md:w-34"
                alt="Logo"
              />
            </Link>
            <br></br>
            <div className="w-full px-2 sm:px-4 lg:px-6">
              <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-4xl mx-auto">
                {/* Discord */}
                <a
                  href="#"
                  className="text-[#FFF5EE] hover:text-gray-500 transition-all duration-500 border-2 border-[#FFF5EE] hover:border-gray-500 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg sm:rounded-xl hover:shadow-md flex-shrink-0"
                  aria-label="Discord community"
                >
                  <svg
                    className="w-2 h-2 xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="text-[#FFF5EE] hover:text-gray-500 transition-all duration-500 border-2 border-[#FFF5EE] hover:border-gray-500 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg sm:rounded-xl hover:shadow-md flex-shrink-0"
                  aria-label="Twitter page"
                >
                  <svg
                    className="w-2 h-2 xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="#"
                  className="text-[#FFF5EE] hover:text-gray-500 transition-all duration-500 border-2 border-[#FFF5EE] hover:border-gray-500 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg sm:rounded-xl hover:shadow-md flex-shrink-0"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-2 h-2 xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="text-[#FFF5EE] hover:text-gray-500 transition-all duration-500 border-2 border-[#FFF5EE] hover:border-gray-500 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg sm:rounded-xl hover:shadow-md flex-shrink-0"
                  aria-label="Instagram page"
                >
                  <svg
                    className="w-2 h-2 xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="text-[#FFF5EE] hover:text-gray-500 transition-all duration-500 border-2 border-[#FFF5EE] hover:border-gray-500 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg sm:rounded-xl hover:shadow-md flex-shrink-0"
                  aria-label="LinkedIn page"
                >
                  <svg
                    className="w-2 h-2 xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="sr-only">LinkedIn page</span>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="text-[#FFF5EE] hover:text-gray-500 transition-all duration-500 border-2 border-[#FFF5EE] hover:border-gray-500 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg sm:rounded-xl hover:shadow-md flex-shrink-0"
                  aria-label="YouTube channel"
                >
                  <svg
                    className="w-2 h-2 xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="sr-only">YouTube channel</span>
                </a>
              </div>
            </div>
          </div>

          <div className="xl:ml-[40%] flex-grow">
            <div>
              <h2 className="mb-4 sm:mb-6 mt-4 ml-6 text-2xl sm:text-sm font-bold text-red-900 uppercase">
                Links
              </h2>
              <ul className="text-[#FFF5EE] font-medium space-y-2 sm:space-y-3 ml-6 mb-9">
                <li>
                  <Link
                    to="/About"
                    className="text-sm sm:text-base hover:underline hover:text-gray-500 transition-colors"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/tracks"
                    className="text-sm sm:text-base hover:underline hover:text-gray-500 transition-colors"
                  >
                    Tracks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mentors"
                    className="text-sm sm:text-base hover:underline hover:text-gray-500 transition-colors"
                  >
                    Mentors & Judges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/humans"
                    className="text-sm sm:text-base hover:underline hover:text-gray-500 transition-colors"
                  >
                    Humans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm sm:text-base hover:underline hover:text-gray-500 transition-colors"
                  >
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className="uppercase font-bold text-5xl sm:text-7xl lg:text-8xl text-center m-4 sm:m-6 lg:m-7 text-shadow-lg/100 text-shadow-gray-900 text-[#FFF5EE]">
            Global AI Buildathon
          </h1>
        </div>

        {/* Divider */}
        <hr className="my-6 border-[#FFF5EE] sm:mx-auto lg:my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col  justify-center sm:flex-row sm:items-center sm:justify-center gap-4">
          {/* Copyright */}
          <span className="text-xs sm:text-sm text-[#FFF5EE] text-center sm:text-left">
            © 2025{" "}
            <a
              href="https://hackaura.girlsleadingtech.com/"
              className="hover:underline hover:text-[#FFF5EE] transition-colors font-bold text-center"
            >
              Girls Leading Tech
            </a>
            . All Rights Reserved. Made with &hearts; by{" "}
            <a
              href="https://www.linkedin.com/in/documentdiarieswithmahak/"
              target="_blank"
              className="hover:underline hover:text-[#FFF5EE] transition-colors font-bold text-center"
            >
              Mahak
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
