import { Products } from "./components/Products";
import { SearchBox } from "./components/SearchBox";

import "./App.css";

function App() {
  return (
    <div className="container">
      <SearchBox />
      <Products />
    </div>
  );
}

export default App;
