import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousal from "../Components/Carousal";
import { Loader } from "../Components/Loader";
import Navbar from "../Components/Navbar";
import { getAllMoviesThunk } from "../Redux/MovieSlice";
export const CustomerPage = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.MovieReducers);
  console.log(moviesData);

  useEffect(() => {
    dispatch(getAllMoviesThunk());
  }, []);

  return (
    <div className=" h-screen overflow-y-scroll text-off-dark dark:text-active-white">
      <Navbar />
      <Carousal items={moviesData.data} />
      <Loader isLoading={moviesData.isLoading} />
    </div>
  );
};
