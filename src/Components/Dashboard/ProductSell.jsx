import React from "react";
import ProductData from "./ProductData";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

export default function ProductSell() {
  return (
    <div>
      <div className=" bg-white px-10 max-sm:p-2   rounded-sm  border-gray-200 mt-12  ">
        <div className="flex justify-between ">
          <h1 className="text-gray-700 font-bold text-2xl py-6">
            Product Sell
          </h1>
          <div className=" flex  py-6 gap-6 max-sm:gap-4">
            <div className="relative max-sm:-ml-3  ">
              <LuSearch
                style={{ color: "gray" }}
                class="absolute inset-x-0  flex mt-2 ml-2"
                size={20}
              />

              <input
                type="search"
                id="default-search"
                className="text-bold  block w-58 p-2 max-sm:w-36 pl-8 text-sm text-gray-900   rounded-lg bg-slate-50 focus:ring-blue-900 focus:border-blue-900 "
                placeholder="Search"
              />
            </div>
            <button className="bg-slate-50 text-gray-400 text-sm rounded-lg flex h-8 p-2 font-semibold gap-2 group relative ">
              <p className="max-md:hidden">Last 30 days</p>
              <IoIosArrowDown className="mt-1" />
              <ul className="rounded absolute hidden  text-gray-400 pt-6 max-md:group-hover:block text-xs">
                <li className="bg-gray-100 -ml-14 w-20 h-6 cursor-pointer rounded-lg">
                  Last 30 days
                </li>
              </ul>
            </button>
          </div>
        </div>

        <div>
          <table className="w-full  ">
            <thead>
              <tr className="text-gray-400 font-semibold shadow-sm shadow-slate-200  ">
                <td>Product Name</td>
                <td>Stock</td>
                <td>Total Price</td>
                <td>Sales</td>
              </tr>
            </thead>

            <tbody>
              {ProductData.map((card) => (
                <tr key={card.id}>
                  <td>
                    <div className="flex flex-wrap gap-8 py-4">
                      <img src={card.imgp} className="h-12 rounded-lg" />
                      <div>
                        <h1 className="font-bold">{card.head}</h1>
                        <p className="max-lg:w-36 text-sm font-semibold text-gray-400">
                          {card.des}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-md font-semibold text-gray-600">
                    {card.stock}
                  </td>
                  <td className=" font-bold">{card.price}</td>
                  <td className="text-md font-semibold text-gray-600 ml-4">
                    {card.sale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
