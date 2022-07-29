import React, { useEffect } from "react";
import Carousal from "../Components/Carousal";
import Navbar from "../Components/Navbar";

export const CustomerPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="h-screen overflow-y-scroll text-off-dark dark:text-active-white">
      <Navbar />
      <Carousal />
    </div>
  );
};
