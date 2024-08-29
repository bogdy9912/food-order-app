import { useContext } from "react";
import Modal from "./UI/Modal";

import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  const hideCart = () => {
    userProgressCtx.hideCart();
  };

  const showCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button onClick={showCheckout}>Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
