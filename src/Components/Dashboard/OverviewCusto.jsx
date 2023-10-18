import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import Test from "./Barchart";

const data = [
  {
    name: "Jan",
    er: 2500,
  },
  {
    name: "Feb",
    er: 2000,
  },
  {
    name: "Mar",
    er: 4000,
  },
  {
    name: "Apr",
    er: 3000,
  },
  {
    name: "May",
    er: 3500,
  },
  {
    name: "Jun",
    er: 1500,
  },
  {
    name: "Jul",
    er: 3500,
  },
  {
    name: "Aug",
    er: 4500,
  },
  {
    name: "Sep",
    er: 4000,
  },
  {
    name: "Oct",
    er: 3000,
  },
  {
    name: "Nov",
    er: 3500,
  },
  {
    name: "Dec",
    er: 3900,
  },
];
const cdata = [
  { name: "old", value: 300 },
  { name: "new", value: 500 },
  { name: "left", value: 500 },
];
const COLORS = ["#FF0080", "#eee", "#6050DC"];
export default class Example extends PureComponent {
  render() {
    return (
      <div className="flex flex-wrap px-24 justify-between max-sm:-ml-8 ">
        <div style={{ width: 960 }} className="bg-white rounded-md ">
          <div className="mt-2 px-4">
            <h1 className="font-bold text-2xl ">Overview</h1>
            <p className="text-gray-400 font-semibold text-sm">
              Monthly Earning
            </p>
          </div>

          <Test />
        </div>

        <div className="bg-white mt-2  rounded-md w-96  max-xl:ml-60 max-lg:ml-32 max-md:ml-16 max-sm:w-72 max-sm:-ml-2 max-2xl:mt-8">
          <div className="mt-2 px-4">
            <h1 className="font-bold text-2xl ">Customers</h1>
            <p className="text-gray-400 font-semibold text-sm">
              Customers that buys product
            </p>
          </div>
          <div className="px-10 max-sm:px-0 hover:scale-105 max-2xl:h-96  ">
            <PieChart width={300} height={400} onMouseEnter={this.onPieEnter}>
              <div className="text-center ">
                {" "}
                <h1>65%</h1>
                <p>
                  Total new <br />
                  Customers
                </p>
              </div>
              <Pie
                data={cdata}
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="text-center -mt-60  ">
              {" "}
              <h1 className="text-2xl font-extrabold">65%</h1>
              <p className="text-gray-500 font-semibold">
                Total new <br />
                Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
