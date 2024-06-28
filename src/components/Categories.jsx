import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing the FiMenu and FiX icons from react-icons

export default function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`w-full ${windowWidth <= 890 ? ' h-[160%]' : windowWidth <= 1680 ? ' h-[110%]' : 'h-[80%]'} bg-neutral-900 flex justify-center items-start overflow-y overflow-x-hidden`}>
      <div className="mt-12">
        <div className={`grid gap-4 ${windowWidth <= 890 ? 'grid-cols-1' : windowWidth <= 1680 ? 'grid-cols-2 ' : 'grid-cols-4'} justify-center items-center`}>
          <div className="bg-yellow-400 w-[400px] h-[320px]"></div>
          <div className="bg-yellow-500 w-[400px] h-[320px]"></div>
          <div className="bg-yellow-600 w-[400px] h-[320px]"></div>
          <div className="bg-yellow-700 w-[400px] h-[320px]"></div>
        </div>
      </div>
    </div>
  );
}
