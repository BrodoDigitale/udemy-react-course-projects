import React, { useState } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      {cartIsOpen && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
