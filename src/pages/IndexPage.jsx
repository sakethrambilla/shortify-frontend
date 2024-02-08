import { Link } from "react-router-dom";
import img from "../assets/headerImg.png";
import logo from "../assets/logo.png";
import dashboard from "../assets/Dashboard.png";
import Features from "../components/Features";

const IndexPage = () => {
  return (
    <>
      <header className="border-b-4 border-gray-300">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800 ">
                ShortifyHub
              </span>
            </div>

            <div className="flex items-center gap-1 lg:order-2">
              <Link
                to={"/login"}
                class="text-gray-800 bg-gray-50 rounded-xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Log in
              </Link>
              <Link
                to={"/register"}
                className="text-white bg-[#F5385D] hover:bg-[#3DA1D42]  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Section 1 */}
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-gray-800 tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Welcome to ShortifyHub
            </h1>
            <p className="max-w-2xl text-gray-800 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              URL shortening service, where simplicity meets functionality. Say
              goodbye to long, unwieldy links and hello to concise, shareable
              URLs tailored to your needs.
            </p>
            <Link
              to={"/register"}
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#F5385D] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to={"/login"}
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
            >
              Log in
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={img} alt="mockup" className="w-full" />
          </div>
        </div>
      </section>
      {/* <HomePageHeader /> */}
      {/* <HomePageHeading /> */}
      <section className="bg-white ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full rounded-md shadow-md "
            src={dashboard}
            alt="dashboard image"
          />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800 ">
              Take Control with Your Dashboard
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
              Our platform offers more than just shortening links; it provides a
              personalized dashboard for managing your shortened URLs
              effortlessly.
            </p>
          </div>
        </div>
      </section>
      {/* <HomePageCTA /> */}
      <Features />
    </>
  );
};

export default IndexPage;
