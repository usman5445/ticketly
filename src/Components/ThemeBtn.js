import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeBtn = () => {
  const [isDark, setIsDark] = useState(false);
  function handleSwitch() {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <button
      className="text-2xl text-primary-gray dark:text-primary-white lg:text-3xl  "
      onClick={handleSwitch}
    >
      {!isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};