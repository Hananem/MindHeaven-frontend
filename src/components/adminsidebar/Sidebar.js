import React, { useState } from "react";
import { FaColumns, FaUser, FaFileAlt, FaTags, FaComments, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import LOGO from "../../images/logo.png"
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <BiSolidDashboard className="h-6 w-6" />, path: "/admin-dashboard" },
    { title: "Users", icon: <FaUser className="h-6 w-6" />, path: "/admin-dashboard/users-table" },
    { title: "Posts", icon: <FaFileAlt className="h-6 w-6" />, path: "/admin-dashboard/posts-table" },
    { title: "Categories", icon: <FaTags className="h-6 w-6" />, path: "/admin-dashboard/categories-table" },
    { title: "Comments", icon: <FaComments className="h-6 w-6" />, path: "/admin-dashboard/comments-table" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } border-r border-black h-screen p-5 pt-8 relative duration-300`}
    >
      {/* Toggle Button */}
      <button
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      >
        <IoMdArrowDropleft />
      </button>
      {/* Logo Section */}
      <div className="flex gap-x-4 items-center">
        <img
          src={LOGO}
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
          alt="logo"
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Admin Panel
        </h1>
      </div>
      {/* Menu Items */}
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-6`}
          >
            <Link to={Menu.path} className="flex items-center gap-x-4">
              {Menu.icon}
              <span
                className={`${!open && "hidden"} origin-left font-semibold duration-200`}
              >
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

