import React from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { GiShieldBash, GiVibratingShield, GiZebraShield } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { ThemeBtn } from "../Components/ThemeBtn";
export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-off-white transition-all  duration-500 dark:bg-off-dark">
      <ThemeBtn classes="absolute top-4 right-4 " />
      <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden opacity-30 ">
        <GiZebraShield className=" animate-blurryBg   text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiVibratingShield className=" animation-delay-4000 animate-blurryBg self-start text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiShieldBash className=" animation-delay-2000 animate-blurryBg self-end text-[15rem] text-secondary-gray  blur-sm filter dark:text-light-gray" />
        <GiZebraShield className=" animate-blurryBg   text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiVibratingShield className=" animation-delay-4000 animate-blurryBg self-start text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiShieldBash className=" animation-delay-2000 animate-blurryBg self-end text-[15rem] text-secondary-gray  blur-sm filter dark:text-light-gray" />
      </div>
      <div className="relative flex h-fit w-fit flex-col items-center  rounded-3xl  bg-active-white p-4 shadow-2xl dark:bg-active-dark">
        <RiLoginCircleFill className="text-6xl text-accent-red drop-shadow-lg  " />
        <span className="h-fit  self-center text-4xl font-semibold text-primary-gray dark:text-primary-white">
          Sign Up
        </span>
        <div className="my-4 flex flex-col space-y-5">
          <input
            type="text"
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Name"
          />
          <input
            type="text"
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="User ID"
          />
          <input
            type="email"
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Email ID"
          />
          <input
            type="password"
            className="rounded-lg border-0 px-4 py-2 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Password"
          />
          <textarea
            type="text"
            className="resize-none rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Address"
          />
          <div className="flex space-x-4">
            <input
              type="number"
              className="block w-32 rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
              placeholder="Age"
            />
            <select
              className="block w-max rounded-lg border-0 py-2 px-4 ring-1 transition  focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray"
              name="userType"
              id="userType"
            >
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
              <option value="CUSTOMER">Customer</option>
            </select>
          </div>
          <button className="w-fit self-center rounded-xl bg-accent-red py-1.5 px-4 text-lg font-bold text-active-white shadow-sm shadow-accent-red transition hover:scale-105 hover:shadow-lg hover:shadow-accent-red focus:scale-105 focus:shadow-lg focus:shadow-accent-red focus:outline-none">
            REGISTER
          </button>
        </div>
        <span
          onClick={() => navigate("/login")}
          className="text-secondary-gray transition hover:text-primary-gray hover:underline focus:text-primary-gray focus:underline dark:text-secondary-gray dark:hover:text-light-gray"
        >
          Alredy have an account?
        </span>
      </div>
    </div>
  );
};
