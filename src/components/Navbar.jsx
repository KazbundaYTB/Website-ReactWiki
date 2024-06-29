import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing the FiMenu and FiX icons from react-icons
import logo from "../img/logo.png"
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
        <img src={logo} alt="" />
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
              <a href="/">Domov</a>
            </li>
            <li>
              <a href="/">Minecraft</a>
            </li>
            <li>
              <a href="/">Webhost</a>
            </li>
            <li>
              <a href="/">Databáze</a>
            </li>
          </ul>
        )}
      </div>
      {/* Sidebar */}
      {windowWidth <= 850 && isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-neutral-900 bg-opacity-95 z-50">
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
            <li className="text-white text-lg py-2 px-4 bg-opacity-10 cursor-pointer">
              <a href="/">Domov</a>
            </li>
            <li className="text-white text-lg py-2 px-4 cursor-pointer">
              <a href="/">Minecraft</a>
            </li>
            <li className="text-white text-lg py-2 px-4 cursor-pointer">
              <a href="/">Webhost</a>
            </li>
            <li className="text-white text-lg py-2 px-4 cursor-pointer">
              <a href="/">Databáze</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
