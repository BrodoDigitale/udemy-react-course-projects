import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

function App() {

  const showCart = useSelector(state => state.ui.cartIsOpen);
  const cart = useSelector(state => state.cart.items);

  useEffect(() => {
    //sending http request
    fetch("https://64ea398abf99bdcc8e676b68.mockapi.io/cart", {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart])

  return (
    <Layout>
      {showCart &&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
