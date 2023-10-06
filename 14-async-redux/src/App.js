import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitialRender = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsOpen);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {

    const sendCartData = async () => {
      dispatch(
        uiActions.setNotificiation({
          status: "pending",
          title: "Sending...",
          msg: "Sending cart data",
        })
      );
      //sending http request
      const response = await fetch(
        "https://64ea398abf99bdcc8e676b68.mockapi.io/cart/1",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        dispatch(
          uiActions.setNotificiation({
            status: "error",
            title: "Error",
            msg: "Sending dta failed",
          })
        );
        throw new Error("Sending data failed");
      }
      dispatch(
        uiActions.setNotificiation({
          status: "success",
          title: "Success",
          msg: "Cart data sent",
        })
      );
    };

    if(isInitialRender) {
      isInitialRender = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.setNotificiation({
          status: "error",
          title: error.name || "Error",
          msg: error.message || "Error occured",
        })
      );
    });
    //no need to use useCallback as dispatch will never change
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.msg}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
