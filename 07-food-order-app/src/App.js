import React, { useState } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <Cart closeCart={closeCart} />}
      <Header openCart={openCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
