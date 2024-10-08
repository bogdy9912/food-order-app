import { useContext } from "react";
import Modal from "./UI/Modal";

import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
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
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? hideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            id={item.id}
            item={item}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={showCheckout}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
