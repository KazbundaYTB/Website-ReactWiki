import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing the FiMenu and FiX icons from react-icons

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 500) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[10%] bg-neutral-800 flex justify-between items-center">
      <div className="pl-4 ml-16">
        <h1 className="text-white text-lg font-bold">Logo</h1>
        <h1 className="text-white text-lg font-bold">{windowWidth}</h1>
      </div>
      <div className="pr-4 mr-16">
        {windowWidth <= 850 ? (
          isSidebarOpen ? (
            <FiX
              className="text-white cursor-pointer invisible"
              size={24}
              onClick={closeSidebar}
            />
          ) : (
            <FiMenu
              className="text-white cursor-pointer"
              size={24}
              onClick={toggleSidebar}
            />
          )
        ) : (
          // Render regular nav links for larger screens
          <ul className="flex flex-row gap-5 text-white">
            <li>
              <a href="http://">Menu</a>
            </li>
            <li>
              <a href="http://">Menu</a>
            </li>
            <li>
              <a href="http://">Menu</a>
            </li>
            <li>
              <a href="http://">Menu</a>
            </li>
          </ul>
        )}
      </div>
      {/* Sidebar */}
      {windowWidth <= 850 && isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-neutral-900 bg-opacity-45 z-50">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <FiX
              className="text-white cursor-pointer"
              size={24}
              onClick={closeSidebar}
            />
          </div>
          {/* Menu items */}
          <ul className="py-4">
            <li className="text-white text-lg py-2 px-4 hover:bg-neutral-900 bg-opacity-10 cursor-pointer">
              <a href="http://">Menu Item 1</a>
            </li>
            <li className="text-white text-lg py-2 px-4 hover:bg-neutral-900 cursor-pointer">
              <a href="http://">Menu Item 2</a>
            </li>
            <li className="text-white text-lg py-2 px-4 hover:bg-neutral-900 cursor-pointer">
              <a href="http://">Menu Item 3</a>
            </li>
            <li className="text-white text-lg py-2 px-4 hover:bg-neutral-900 cursor-pointer">
              <a href="http://">Menu Item 4</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
