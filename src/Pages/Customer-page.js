import React, { useEffect } from "react";
import Carousal from "../Components/Carousal";
import Navbar from "../Components/Navbar";
import { getAllMovies } from "../Apis/Movie-apis";
export const CustomerPage = () => {
  useEffect(() => {
    getAllMovies()
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-screen overflow-y-scroll text-off-dark dark:text-active-white">
      <Navbar />
      <Carousal />
    </div>
  );
};
