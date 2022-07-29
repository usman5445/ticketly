import React from "react";
import { MdAirplaneTicket } from "react-icons/md";

export const Loader = ({ isLoading }) => {
  return (
    <div
      className={`absolute top-0 z-50 flex  h-screen w-screen animate-pulse flex-col  items-center justify-center   backdrop-blur-md backdrop-brightness-75 ${
        !isLoading && "hidden"
      }`}
    >
      <MdAirplaneTicket className="animate-ping text-5xl" />.
    </div>
  );
};
