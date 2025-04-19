import React, { useEffect, useRef, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";

function Carousal({ items }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [src, setSrc] = useState("");
  const [trigger, setTrigger] = useState(true);
  const [
    containerRef,
    firstCardRef,
    secondCardRef,
    thirdCardRef,
    preBtnRef,
    nextBtnRef,
  ] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  function handleChange(direction, e) {
    e && (e.target.disabled = true);
    firstCardRef.current.classList.add("animate-firstCard");
    secondCardRef.current.classList.add("animate-secondCard");
    thirdCardRef.current.classList.add("animate-thirdCard");

    let newArr = [...visibleItems];
    if (direction === "pre") {
      newArr.unshift(newArr.pop());
    } else if (direction === "next") {
      newArr.push(newArr.shift());
    }
    setTimeout(() => {
      setVisibleItems(newArr);
    }, 300);
    setTimeout(() => {
      firstCardRef.current.classList.remove("animate-firstCard");
      secondCardRef.current.classList.remove("animate-secondCard");
      thirdCardRef.current.classList.remove("animate-thirdCard");
      e && (e.target.disabled = false);
    }, 500);
  }

  useEffect(() => {
    setVisibleItems(items);

    if (trigger) {
      setInterval(() => {
        nextBtnRef.current.click();
      }, 5000);
      setTrigger(false);
    }
  }, [items]);
  return (
    <div
      ref={containerRef}
      className="flex h-48 w-screen items-center justify-center  overflow-x-clip  transition  md:h-96  "
    >
      <button
        disabled={false}
        ref={preBtnRef}
        onClick={(e) => handleChange("pre", e)}
        className=" absolute  left-1 z-20 text-6xl text-accent-red  drop-shadow-[0_0_10px_rgb(216,31,38)] md:left-12"
      >
        <BsFillCaretLeftFill className="pointer-events-none" />
      </button>

      <div
        ref={firstCardRef}
        style={{ backgroundImage: `url("${visibleItems[0]?.posterUrls[0]}")` }}
        className=" relative mx-1 h-40 w-56 flex-shrink-0 overflow-hidden rounded-3xl bg-white bg-contain bg-center  shadow-xl brightness-50  transition  delay-100 dark:bg-inactive-dark md:mx-4 md:h-72 md:w-[30rem]"
      >
        <div className="absolute bottom-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-black p-4">
          <h1 className="font-montserrat-bold text-2xl text-primary-white md:text-5xl">
            {visibleItems[0]?.name}
          </h1>
          <span className="text-[0.5rem] font-semibold leading-none text-primary-white md:text-base">
            Star Cast :
            {visibleItems[0]?.casts.map((el, i) => (
              <span key={i} className="font-normal">
                {" "}
                {el},{" "}
              </span>
            ))}
          </span>
          {/* <span className="text-[0.5rem] font-semibold leading-none text-primary-white md:text-base">
            Directed By :
            <span className="font-normal"> {visibleItems[0]?.director}</span>
          </span> */}
        </div>
        <button className="absolute right-2 top-2 rounded-xl bg-accent-red p-1 font-montserrat-bold text-sm text-primary-white shadow-md shadow-black md:text-base">
          {visibleItems[1]?.languages?.join(", ")}
        </button>
      </div>
      <div
        ref={secondCardRef}
        style={{ backgroundImage: `url("${visibleItems[1]?.posterUrls[0]}")` }}
        className="group relative z-10 mx-1 h-40 w-56 flex-shrink-0 scale-110 overflow-hidden rounded-3xl bg-white bg-contain bg-center    shadow-xl  transition-all delay-100 dark:bg-active-dark md:mx-4 md:h-72 md:w-[30rem]"
      >
        <div className="absolute bottom-0 flex h-3/4 w-full flex-col justify-end bg-gradient-to-t from-black p-4">
          <h1 className="font-montserrat-bold text-2xl text-primary-white md:text-5xl">
            {visibleItems[1]?.name}
          </h1>
          <span className="text-[0.5rem] font-semibold leading-none text-primary-white md:text-base">
            Star Cast :
            {visibleItems[1]?.casts.map((el, i) => (
              <span key={i} className="font-normal">
                {" "}
                {el},{" "}
              </span>
            ))}
          </span>
          {/* <span className="text-[0.5rem] font-semibold leading-none text-primary-white md:text-base">
            Directed By :
            <span className="font-normal"> {visibleItems[1]?.director}</span>
          </span> */}
        </div>
        <a
          className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 transform text-5xl text-accent-red drop-shadow-[0_0_10px_rgb(216,31,38)] transition group-hover:scale-100 lg:scale-0"
          href={visibleItems[1]?.trailerUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiPlay />
        </a>
        <button className="absolute right-2 top-2 rounded-xl bg-accent-red p-1 font-montserrat-bold text-sm text-primary-white shadow-md shadow-black md:text-base">
          {visibleItems[1]?.languages?.join(", ")}
        </button>
      </div>
      <div
        ref={thirdCardRef}
        style={{ backgroundImage: `url("${visibleItems[2]?.posterUrls[0]}")` }}
        className="relative mx-1 h-40 w-56 flex-shrink-0 overflow-hidden rounded-3xl bg-white bg-contain   bg-center shadow-xl brightness-50  transition  delay-100 dark:bg-inactive-dark md:mx-4 md:h-72 md:w-[30rem]"
      >
        <div className="absolute bottom-0 flex h-full w-full flex-col justify-end bg-gradient-to-t from-black p-4">
          <h1 className="font-montserrat-bold text-2xl text-primary-white md:text-5xl">
            {visibleItems[2]?.name}
          </h1>
          <span className="text-[0.5rem] font-semibold leading-none text-primary-white md:text-base">
            Star Cast :
            {visibleItems[2]?.casts.map((el, i) => (
              <span key={i} className="font-normal">
                {" "}
                {el},{" "}
              </span>
            ))}
          </span>
          {/* <span className="text-[0.5rem] font-semibold leading-none text-primary-white md:text-base">
            Directed By :
            <span className="font-normal"> {visibleItems[2]?.director}</span>
          </span> */}
        </div>
        <button className="absolute right-2 top-2 rounded-xl bg-accent-red p-1 font-montserrat-bold text-sm text-primary-white shadow-md shadow-black md:text-base">
          {visibleItems[2]?.languages?.join(", ")}
        </button>
      </div>

      <button
        disabled={false}
        ref={nextBtnRef}
        onClick={(e) => handleChange("next", e)}
        className=" absolute right-1 z-20   text-6xl text-accent-red drop-shadow-[0_0_10px_rgb(216,31,38)] md:right-12"
      >
        <BsFillCaretRightFill className="pointer-events-none" />
      </button>
    </div>
  );
}

export default Carousal;
