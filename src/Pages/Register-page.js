import React, { useRef, useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { GiShieldBash, GiVibratingShield, GiZebraShield } from "react-icons/gi";
import { IoReloadCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ThemeBtn } from "../Components/ThemeBtn";
import { signUp } from "../Apis/Auth-apis";
import { AlertBar } from "../Components/AlertBar";
export const RegisterPage = () => {
  const navigate = useNavigate();
  const [alertData, setAlertData] = useState({
    isVisible: false,
    isDanger: true,
    massage: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [
    nameRef,
    userIdRef,
    emailRef,
    passwordRef,
    addressRef,
    ageRef,
    userTypeRef,
  ] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  function handleRegister(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name: nameRef.current.value,
      userId: userIdRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      address: addressRef.current.value,
      age: ageRef.current.value,
      userType: userTypeRef.current.value,
    };

    signUp(data)
      .then((resp) => {
        console.log(resp);
        setIsLoading(false);
        setAlertData({ isVisible: true, massage: "Registration Sucessfull!" });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setAlertData({
          isVisible: true,
          massage: err?.response?.data?.message || err.message,
          isDanger: true,
        });
      });
  }
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-off-white transition-all  duration-500 dark:bg-off-dark">
      <ThemeBtn classes="absolute top-4 right-4 " />
      <AlertBar data={alertData} setData={setAlertData} />
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
        <form
          onSubmit={(ev) => handleRegister(ev)}
          className="my-4 flex flex-col space-y-5"
        >
          <input
            type="text"
            ref={nameRef}
            required
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Name"
          />
          <input
            type="text"
            ref={userIdRef}
            required
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="User ID"
          />
          <input
            type="email"
            ref={emailRef}
            required
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Email ID"
          />
          <input
            type="password"
            ref={passwordRef}
            required
            className="rounded-lg border-0 px-4 py-2 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Password"
          />
          <textarea
            type="text"
            ref={addressRef}
            required
            className="resize-none rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Address"
          />
          <div className="flex space-x-4">
            <input
              type="number"
              ref={ageRef}
              required
              className="block w-32 rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
              placeholder="Age"
            />
            <select
              ref={userTypeRef}
              className="block w-max rounded-lg border-0 py-2 px-4 ring-1 transition  focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray"
              name="userType"
              id="userType"
              defaultValue={"CUSTOMER"}
            >
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
              <option value="CUSTOMER">Customer</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-fit self-center rounded-xl bg-accent-red py-1.5 px-4 text-lg font-bold text-active-white shadow-sm shadow-accent-red transition hover:scale-105 hover:shadow-lg hover:shadow-accent-red focus:scale-105 focus:shadow-lg focus:shadow-accent-red focus:outline-none"
          >
            {isLoading ? (
              <IoReloadCircle className="animate-spin text-3xl" />
            ) : (
              "REGISTER"
            )}
          </button>
        </form>
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
