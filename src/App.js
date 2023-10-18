import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import Card from "./Components/Dashboard/Card";
import OverviewCusto from "./Components/Dashboard/OverviewCusto";
import ProductSell from "./Components/Dashboard/ProductSell";
import Test from "./Components/Dashboard/Barchart";
function App() {
  return (
    <div className="bg-gray-100">
      <Sidebar />
      <div className=" px-18 py-12 lg:ml-64">
        <Card />
        <OverviewCusto />
        <div className="px-24 max-sm:px-3 max-md:px-10">
          <ProductSell />
        </div>
      </div>
    </div>
  );
}

export default App;
