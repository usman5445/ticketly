import React from "react";
import { SvgHomeCinema } from "../Assets/SvgHomeCinema";
import { ThemeBtn } from "../Components/ThemeBtn";
import { FaTicketAlt } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <div className="relative grid h-full grid-rows-6 px-8 text-3xl md:text-5xl">
      <div className="absolute h-screen w-screen overflow-hidden  opacity-30">
        <GiTicket className="absolute left-4 animate-blurryBg text-[15rem]  text-secondary-gray blur-sm filter dark:text-inactive-white" />
        <GiTicket className="animation-delay-6000 absolute bottom-4 rotate-90 animate-blurryBg text-[15rem] text-secondary-gray blur-sm filter dark:text-inactive-white " />
        <GiTicket className="animation-delay-4000 absolute right-4 bottom-4 rotate-6 animate-blurryBg text-[15rem] text-secondary-gray blur-sm filter dark:text-inactive-white" />
        <GiTicket className="animation-delay-2000 absolute top-32 right-1/3 rotate-180 animate-blurryBg text-[20rem] text-secondary-gray blur-sm filter dark:text-inactive-white" />
        <GiTicket className="animation-delay-6000 absolute right-4 rotate-45 animate-blurryBg text-[15rem] text-secondary-gray blur-sm filter dark:text-inactive-white  " />
      </div>
      <div className="z-10 flex h-fit w-full flex-row items-center justify-between py-4  ">
        <h4 className="font-montserrat-bold text-primary-gray dark:text-primary-white ">
          Ticketly<span className="text-accent-red">.</span>
        </h4>
        <ThemeBtn />
      </div>
      <div className="row-span-5 grid grid-cols-12 items-center">
        <div className="relative col-span-12 md:col-span-6 ">
          <h1 className="text-2xl font-extralight text-secondary-gray md:text-4xl">
            Buying
          </h1>
          <h1 className="pt-4 text-3xl font-bold text-primary-gray dark:text-primary-white md:text-6xl ">
            <span className="text-accent-red">Movie</span> Tickets{" "}
            <FaTicketAlt className="inline" />
          </h1>
          <h1 className="text-2xl font-extralight text-secondary-gray md:text-4xl">
            Made easy...
          </h1>
          <p className="text-base text-primary-gray dark:text-light-gray md:text-lg">
            Book your favorite movie tickets from comfort of your home!
          </p>
          <button
            onClick={handleClick}
            className="mt-4 rounded-2xl bg-accent-red p-2 text-xl text-primary-white shadow-md shadow-accent-red transition-all  hover:scale-110 hover:shadow-2xl hover:shadow-accent-red md:mt-8 md:text-2xl"
          >
            Book Now
          </button>
        </div>
        <div className="col-span-12 md:col-span-5">
          <SvgHomeCinema />
        </div>
      </div>
    </div>
  );
};
