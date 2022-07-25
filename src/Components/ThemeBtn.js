import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeBtn = ({ classes }) => {
  const [isDark, setIsDark] = useState(false);
  function handleSwitch() {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <button
      className={`z-10 text-2xl text-primary-gray drop-shadow-xl dark:text-primary-white lg:text-3xl ${classes}`}
      onClick={handleSwitch}
    >
      {!isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};
