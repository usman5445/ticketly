import React, { useRef, useState } from "react";
import { ThemeBtn } from "./ThemeBtn";
import { FaUserCircle } from "react-icons/fa";
import { CgLogOut, CgOptions } from "react-icons/cg";
import SearchBar from "./SearchBar";
import { IoLogOut, IoReloadCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const drawerRef = useRef();
  const navigate = useNavigate();
  function drawerHandler() {
    drawerRef.current.classList.toggle("hidden");
  }
  function handleLogout() {
    setIsLoading(true);
    localStorage.removeItem("user");
    navigate("/");
    setIsLoading(false);
  }
  return (
    <div className=" sticky z-50  grid w-screen grid-cols-2   items-center px-4  py-4 md:grid-cols-3  ">
      <h4 className="justify-self-start text-start font-montserrat-bold text-4xl text-primary-gray dark:text-primary-white ">
        Ticketly<span className=" text-accent-red">.</span>
      </h4>
      <button
        onClick={drawerHandler}
        className="justify-self-end text-3xl text-primary-gray dark:text-primary-white md:hidden"
      >
        <CgOptions />
      </button>
      <SearchBar className={"invisible md:visible"} />
      <div className="  invisible flex items-center justify-self-end md:visible">
        <ThemeBtn classes={"mx-4 "} />
        <div className="mx-3 ">
          <h4 className="text-2xl font-semibold text-primary-gray dark:text-primary-white">
            Usman
          </h4>
          <h5 className=" text-end  font-montserrat-italic text-xs font-thin">
            usman5445
          </h5>
        </div>
        <FaUserCircle className="rounded-full text-4xl text-primary-gray outline outline-dashed outline-4 outline-offset-2 outline-secondary-gray" />
        <button
          onClick={handleLogout}
          className="ml-7 w-fit rounded-xl bg-accent-red py-1.5 px-4 text-lg font-bold text-active-white shadow-sm shadow-accent-red transition hover:scale-105 hover:shadow-lg hover:shadow-accent-red focus:scale-105 focus:shadow-lg focus:shadow-accent-red focus:outline-none"
        >
          {isLoading ? (
            <IoReloadCircle className="animate-spin text-3xl" />
          ) : (
            <IoLogOut className="text-3xl" />
          )}
        </button>
      </div>
      <div
        ref={drawerRef}
        className="absolute top-20 z-50 hidden min-h-[4rem] w-full justify-self-center rounded-3xl p-4 shadow-xl backdrop-blur-sm backdrop-brightness-95 md:hidden"
      >
        <div className=" my-4 flex  w-full items-center justify-between ">
          <button
            onClick={handleLogout}
            className="w-fit  rounded-xl bg-accent-red py-1.5 px-4 text-lg font-bold text-active-white shadow-sm shadow-accent-red transition hover:scale-105 hover:shadow-lg hover:shadow-accent-red focus:scale-105 focus:shadow-lg focus:shadow-accent-red focus:outline-none"
          >
            {isLoading ? (
              <IoReloadCircle className="animate-spin text-3xl" />
            ) : (
              <IoLogOut className="text-3xl" />
            )}
          </button>
          <ThemeBtn classes={"mx-4 "} />
          <div className="flex items-center">
            <div className="mx-3  ">
              <h4 className="text-2xl font-semibold text-primary-gray dark:text-primary-white">
                Usman
              </h4>
              <h5 className=" text-end  font-montserrat-italic text-xs font-thin">
                usman5445
              </h5>
            </div>
            <FaUserCircle className="rounded-full text-4xl text-primary-gray outline outline-dashed outline-4 outline-offset-2 outline-secondary-gray" />
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
