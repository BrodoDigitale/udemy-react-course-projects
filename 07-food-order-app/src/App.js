import React, { useState } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && <Cart closeCart={closeCart} />}
      <Header openCart={openCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
