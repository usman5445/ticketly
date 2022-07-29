import React, { useEffect, useRef, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
function Carousal() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [
    containerRef,
    firstCardRef,
    secondCardRef,
    thirdCardRef,
    preBtnRef,
    nextBtnRef,
  ] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [trigger, setTrigger] = useState(true);
  function handleChange(direction, e) {
    console.log(visibleItems);
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
    setVisibleItems(arr);
  }, []);
  return (
    <div
      ref={containerRef}
      className="flex h-48 w-screen items-center  justify-center overflow-clip transition  md:h-96  "
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
        className="mx-1 h-40 w-56 flex-shrink-0 rounded-3xl bg-white text-5xl shadow-xl  transition  delay-100 dark:bg-inactive-dark md:mx-4 md:h-72 md:w-[30rem]  "
      >
        {visibleItems[0]}
      </div>
      <div
        ref={secondCardRef}
        className="z-10 mx-1 h-40 w-56 flex-shrink-0 scale-110 rounded-3xl  bg-white text-5xl shadow-xl  transition-all delay-100 dark:bg-active-dark md:mx-4 md:h-72 md:w-[30rem]  "
      >
        {visibleItems[1]}
      </div>
      <div
        ref={thirdCardRef}
        className="mx-1 h-40 w-56 flex-shrink-0 rounded-3xl bg-white text-5xl shadow-xl  transition  delay-100 dark:bg-inactive-dark md:mx-4 md:h-72 md:w-[30rem]  "
      >
        {visibleItems[2]}
      </div>

      <button
        disabled={false}
        ref={nextBtnRef}
        onClick={(e) => handleChange("next", e)}
        className=" absolute right-1 z-20 text-6xl  text-accent-red drop-shadow-[0_0_10px_rgb(216,31,38)] md:right-12"
      >
        <BsFillCaretRightFill className="pointer-events-none" />
      </button>
    </div>
  );
}

export default Carousal;
