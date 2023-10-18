import blue from "./blue.png";
import green from "./green.png";
import purple from "./purple.png";
import pink from "./pink.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
export default [
  {
    id: 1,
    img: green,
    top: "Earning",
    amt: "$198k",
    growth: "37.8%",
    logo: AiOutlineArrowUp,
    tcolor: "green",
  },

  {
    id: 2,
    img: purple,
    top: "Orders",
    amt: "$2.4k",
    growth: "2%",
    logo: AiOutlineArrowDown,
    tcolor: "red",
  },

  {
    id: 3,
    img: blue,
    top: "Balance",
    amt: "$2.5k",
    growth: "2%",
    logo: AiOutlineArrowDown,
    tcolor: "red",
  },
  {
    id: 4,
    img: pink,
    top: "Total States",
    amt: "$89k",
    growth: "11%",
    logo: AiOutlineArrowUp,
    tcolor: "green",
  },
];
