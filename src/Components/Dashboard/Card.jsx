import React from "react";
import { LuSearch } from "react-icons/lu";
import CardData from "./CardData";
export default function Card() {
  return (
    <div>
      <div className="max-lg:mt-10">
        <div className="flex flex-wrap justify-between px-12">
          <h1 className="text-2xl ml-2 font-semibold md:text-center ">
            Hello Sharukh 👋 ,
          </h1>
          <div class="relative max-sm:-ml-3">
            <LuSearch
              style={{ color: "gray" }}
              class="absolute inset-x-0  flex mt-2 ml-2"
              size={20}
            />

            <input
              type="search"
              id="default-search"
              className="text-bold  block w-80 p-2  pl-8 text-sm text-gray-900 border  rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
            />
          </div>
        </div>
        <div>
          <div className="h-full w-4/4 p-12 ">
            <div className="flex flex-wrap  gap-2  ">
              {CardData.map((card) => (
                <div
                  className={`bg-white rounded-md w-72 mx-auto  hover:scale-95`}
                >
                  <div className="flex">
                    <img src={card.img} className="h-44"></img>
                    <div className="text-sm mt-14">
                      <p className="text-gray-400">{card.top}</p>
                      <h1>{card.amt}</h1>
                      <p className="text-sm">{card.growth}this month.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//shadow-[0_1px_5px_rgb(0,0,0,0.1)]
