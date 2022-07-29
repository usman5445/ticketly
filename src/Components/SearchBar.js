import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
function SearchBar({ className }) {
  const searchResultRef = useRef();
  const serachInputRef = useRef();
  function handleInputChange() {
    if (!serachInputRef.current.value) {
      searchResultRef.current.classList.add("hidden");
    } else {
      searchResultRef.current.classList.remove("hidden");
    }
  }
  return (
    <>
      <div
        className={`${className} flex items-center rounded-2xl px-4  ring-2 ring-primary-gray ring-offset-2`}
      >
        <BiSearchAlt className="text-2xl text-primary-gray dark:text-primary-white" />
        <input
          ref={serachInputRef}
          onChange={handleInputChange}
          type="text"
          className="w-full border-none bg-transparent text-xl outline-none ring-0 focus:outline-none focus:ring-0"
        />
      </div>
      <div
        ref={searchResultRef}
        className="top-28 z-20 my-4 hidden h-full w-full  justify-self-center rounded-3xl shadow-xl filter backdrop-blur-sm  backdrop-brightness-90 md:absolute md:top-20 md:h-4/5 md:w-11/12 md:w-2/4  "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis amet
        suscipit et error, sit porro non quibusdam quisquam dicta voluptates
        nulla minus ipsam esse, laboriosam tenetur iusto ex vero? Maiores.
      </div>
    </>
  );
}

export default SearchBar;
