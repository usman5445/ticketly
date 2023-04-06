import React, { useRef, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { GiShieldBash, GiVibratingShield, GiZebraShield } from "react-icons/gi";
import { IoReloadCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Apis/Auth-apis";
import { AlertBar } from "../Components/AlertBar";
import { ThemeBtn } from "../Components/ThemeBtn";
export const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userIdRef, passwordRef] = [useRef(), useRef()];
  const [alertData, setAlertData] = useState({
    isVisible: false,
    isDanger: true,
    massage: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      userId: userIdRef.current.value,
      password: passwordRef.current.value,
    };
    signIn(data)
      .then((resp) => {
        if (resp.data.message) {
          setAlertData({
            isVisible: true,
            isDanger: true,
            massage: resp.data.message,
          });
          setIsLoading(false);
          return;
        }
        localStorage.setItem("user", JSON.stringify(resp.data));
        setIsLoading(false);
        setAlertData({ isVisible: true, massage: "Login Sucessfull!" });
        setTimeout(() => {
          navigate(`/${resp.data.userType.toLowerCase()}`);
        }, 2000);
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
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-off-white transition-all duration-500 dark:bg-off-dark">
      <ThemeBtn classes="absolute top-4 right-4 " />
      <AlertBar data={alertData} setData={setAlertData} />
      <div className="absolute flex h-full w-full flex-col items-center justify-center opacity-30 ">
        <GiZebraShield className=" animate-blurryBg   text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiVibratingShield className=" animation-delay-4000 animate-blurryBg self-start text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiShieldBash className=" animation-delay-2000 animate-blurryBg self-end text-[15rem] text-secondary-gray  blur-sm filter dark:text-light-gray" />
        <GiZebraShield className=" animate-blurryBg   text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiVibratingShield className=" animation-delay-4000 animate-blurryBg self-start text-[15rem] text-secondary-gray blur-sm filter dark:text-light-gray" />
        <GiShieldBash className=" animation-delay-2000 animate-blurryBg self-end text-[15rem] text-secondary-gray  blur-sm filter dark:text-light-gray" />
      </div>
      <div className="relative flex h-fit w-fit flex-col items-center  rounded-3xl  bg-active-white p-4 shadow-2xl dark:bg-active-dark">
        <FaUserShield className="text-6xl text-accent-red drop-shadow-lg  " />
        <span className="h-fit  self-center text-4xl font-semibold text-primary-gray dark:text-primary-white">
          Sign In
        </span>
        <form
          onSubmit={(e) => handleLogin(e)}
          className="my-4 flex flex-col space-y-5"
        >
          <input
            ref={userIdRef}
            required
            type="text"
            className="rounded-lg border-0 py-2 px-4 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="User ID"
          />
          <input
            ref={passwordRef}
            required
            type="password"
            className="rounded-lg border-0 px-4 py-2 ring-1 transition focus:scale-105 focus:ring-2 focus:ring-accent-red dark:bg-inactive-dark dark:text-off-white dark:ring-secondary-gray "
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-fit self-center rounded-xl bg-accent-red py-1.5 px-4 text-lg font-bold text-active-white shadow-sm shadow-accent-red transition hover:scale-105 hover:shadow-lg hover:shadow-accent-red focus:scale-105 focus:shadow-lg focus:shadow-accent-red focus:outline-none"
          >
            {isLoading ? (
              <IoReloadCircle className="animate-spin text-3xl" />
            ) : (
              "LOGIN"
            )}
          </button>
        </form>
        <span
          onClick={() => navigate("/register")}
          className="text-secondary-gray transition hover:text-primary-gray hover:underline focus:text-primary-gray focus:underline dark:text-secondary-gray dark:hover:text-light-gray"
        >
          Don't have an account?
        </span>
      </div>
    </div>
  );
};
