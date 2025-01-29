import Navigation from "./Navigation/navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { FilterProvider } from "./context/productContext";
import '../src/index.css';

function App() {
  return (
    <FilterProvider>
      <Sidebar />
      <Navigation placeholder="Enter your search shoes." />
      <Recommended />
      <Products />
    </FilterProvider>
  );
}

export default App;
