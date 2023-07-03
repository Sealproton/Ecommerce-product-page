import "./App.css";
import { Navbar } from "./components/navbar";
import { Main } from "./components/main";
import { Box } from "./components/box";
import { useGlobalContext } from "./components/context";
import { Cart } from "./components/cart";

function App() {
  const { navBox, setNavBox, openCart } = useGlobalContext();
  return (
    <div className="relative w-full  min-h-[100vh] ">
      {navBox && <Box />}
      {openCart && <Cart />}
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
