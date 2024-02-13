import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Navigation cartCount={cartCount} />
      <Header />
      <ProductList setCartCount={setCartCount} />
    </>
  );
}

export default App;
