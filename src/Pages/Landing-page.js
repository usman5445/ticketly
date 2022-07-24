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
    <div className="px-8 text-3xl md:text-5xl h-full grid grid-rows-6 relative">
      <div className="absolute w-screen h-screen opacity-30  overflow-hidden">
        <GiTicket className="absolute dark:text-inactive-white text-[15rem] animate-blurryBg  filter blur-sm text-secondary-gray left-4" />
        <GiTicket className="absolute dark:text-inactive-white animation-delay-6000 text-[15rem] animate-blurryBg rotate-90 filter blur-sm text-secondary-gray bottom-4 " />
        <GiTicket className="absolute dark:text-inactive-white animation-delay-4000 text-[15rem] animate-blurryBg rotate-6 filter blur-sm text-secondary-gray right-4 bottom-4" />
        <GiTicket className="absolute dark:text-inactive-white animation-delay-2000 text-[20rem] animate-blurryBg rotate-180 filter blur-sm text-secondary-gray top-32 right-1/3" />
        <GiTicket className="absolute dark:text-inactive-white animation-delay-6000 text-[15rem] animate-blurryBg rotate-45 filter blur-sm text-secondary-gray right-4  " />
      </div>
      <div className="flex flex-row items-center z-10 w-full h-fit py-4 justify-between  ">
        <h4 className="text-primary-gray dark:text-primary-white font-montserrat-bold ">
          Ticketly<span className="text-accent-red">.</span>
        </h4>
        <ThemeBtn />
      </div>
      <div className="grid grid-cols-12 items-center row-span-5">
        <div className="md:col-span-6 col-span-12 relative ">
          <h1 className="text-secondary-gray text-2xl md:text-4xl font-extralight">
            Buying
          </h1>
          <h1 className="text-3xl md:text-6xl pt-4 font-bold text-primary-gray dark:text-primary-white ">
            <span className="text-accent-red">Movie</span> Tickets{" "}
            <FaTicketAlt className="inline" />
          </h1>
          <h1 className="text-secondary-gray text-2xl md:text-4xl font-extralight">
            Made easy...
          </h1>
          <p className="dark:text-light-gray text-primary-gray text-base md:text-lg">
            Book your favorite movie tickets from comfort of your home!
          </p>
          <button
            onClick={handleClick}
            className="text-xl md:mt-8 md:text-2xl mt-4 text-primary-white bg-accent-red rounded-2xl p-2 shadow-md  hover:scale-110 shadow-accent-red hover:shadow-2xl hover:shadow-accent-red transition-all"
          >
            Book Now
          </button>
        </div>
        <div className="md:col-span-5 col-span-12">
          <SvgHomeCinema />
        </div>
      </div>
    </div>
  );
};
