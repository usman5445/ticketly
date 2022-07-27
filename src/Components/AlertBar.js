import React, { useEffect } from "react";
import { SvgAlertBubble } from "../Assets/SvgAlertBubble";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";
export const AlertBar = ({ data, setData }) => {
  const colors = {
    bg: data?.isDanger ? "bg-[#DB3056]" : "bg-[#0C7040]",
    fg: data?.isDanger ? "fill-[#851D41]" : "fill-[#004440]",
  };

  function handleClose() {
    setData({ isVisible: false });
  }

  function autoClose() {
    setTimeout(() => {
      setData({ ...data, isVisible: false });
    }, data.massage.length * 200);
  }
  useEffect(() => {
    data.isVisible && autoClose();
  }, [data]);

  return (
    <div
      className={
        colors.bg +
        ` ${
          !data?.isVisible && "hidden"
        } absolute top-[4%] z-[1] min-h-[4rem] w-4/5 rounded-2xl p-3  text-inactive-white    drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] md:w-1/4 `
      }
    >
      <h3 className="text-xl font-semibold">
        {!data?.isDanger ? "Well Done!" : "oh snap!"}
      </h3>
      <p className=" font-black text-active-white">{data?.massage}</p>
      <IoClose
        onClick={handleClose}
        className="absolute right-2 top-2 text-xl"
      />
      {data.isDanger ? (
        <MdOutlineError
          className="absolute -top-3 left-2 z-10   text-5xl drop-shadow-md  "
          fill={data?.isDanger ? "#851D41" : "#004440"}
        />
      ) : (
        <BsFillCheckCircleFill
          className="absolute -top-3 left-2 z-10   text-5xl drop-shadow-md  "
          fill={data?.isDanger ? "#851D41" : "#004440"}
        />
      )}
      <SvgAlertBubble
        classes={"absolute bottom-0 -z-10 left-4"}
        color={colors.fg}
      />
    </div>
  );
};
