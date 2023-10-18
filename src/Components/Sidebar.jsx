import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { BiBullseye } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbHexagonLetterD } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

export const Sidebar = () => {
  return (
    <div>
      <aside className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full lg:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-950 ">
          <div className="flex gap-4 mt-4 p-4">
            <TbHexagonLetterD size={35} color="white" />
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          </div>
          <ul className="space-y-2 font-medium mt-8 p-4">
            <li>
              <a
                href="#"
                className="flex justify-between items-center p-2 text-gray-400 hover:text-white rounded-lg  hover:bg-white dark:hover:bg-gray-500 group"
              >
                <div className="flex">
                  <LuLayoutDashboard className="mt-1" size={20} />
                  <span className="ml-3">Dashboard</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center p-2 text-gray-400 hover:text-white  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <div className="flex">
                  <BsBoxes className="mt-1" size={20} />
                  <span className="ml-3">Product</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center p-2 text-gray-400 hover:text-white  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <div className="flex">
                  <IoMdContacts className="mt-1" size={20} />
                  <span className="ml-3">Customer</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex justify-between items-center p-2 text-gray-400 hover:text-white  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <div className="flex">
                  <LuWallet className="mt-1" size={20} />
                  <span className="ml-3">Income</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center p-2 text-gray-400 hover:text-white  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <div className="flex">
                  <BiBullseye className="mt-1" size={20} />
                  <span className="ml-3">Promote</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center p-2 text-gray-400 hover:text-white  rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <div className="flex">
                  <MdOutlineLiveHelp className="mt-1" size={20} />
                  <span className="ml-3">Help</span>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </a>
            </li>
          </ul>
          <div className=" flex justify-between items-center w-full mt-96 bg-gray-500 h-14 rounded-lg ">
            <div className="flex justify-center items-center  space-x-2 ml-2">
              <div>
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                  alt="avatar"
                />
              </div>
              <div className="flex justify-start flex-col items-start ">
                <p className=" text-sm leading-5 text-white">Evano</p>
                <p className="text-xs leading-3 text-gray-300">
                  Project Manager
                </p>
              </div>
            </div>
            <IoIosArrowDown className="fill-gray-300 mr-1" />
          </div>
        </div>
      </aside>
      <div>
        <div className=" hidden max-lg:block fixed  left-0 z-50 w-full h-16 bg-white   dark:bg-blue-950 ">
          <div className="flex justify-between">
            <div className="flex gap-4 mt-2 p-4">
              <TbHexagonLetterD size={35} color="white" />
              <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
            </div>
            <img
              className="rounded-full h-12 mt-2"
              src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
              alt="avatar"
            />
          </div>
        </div>
        <div className=" hidden max-lg:block fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-blue-950 ">
          <div className="grid h-full max-w-lg grid-cols-6 mx-auto font-medium gap-2">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center  dark:hover:bg-gray-500 group"
            >
              <LuLayoutDashboard className="mt-1 " color="white" size={25} />
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-500 group"
            >
              <BsBoxes className="mt-1" color="white" size={25} />
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center  dark:hover:bg-gray-500 group"
            >
              <IoMdContacts className="mt-1" color="white" size={25} />
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-500 group"
            >
              <LuWallet className="mt-1" color="white" size={25} />
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-500 group"
            >
              <BiBullseye className="mt-1" color="white" size={25} />
            </button>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center   dark:hover:bg-gray-500 group"
            >
              <MdOutlineLiveHelp className="mt-1 " color="white" size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
