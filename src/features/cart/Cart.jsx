/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearCart, getCart } from './cartSlice';
import { useSelector } from 'react-redux';
import { getUsername } from '../user/userSlice';

import { useDispatch } from 'react-redux';

function Cart() {
  const cart = useSelector(getCart);
  console.log(cart);
  const username = useSelector(getUsername); // useSelector(state=> state.user.username)
  const dispatch = useDispatch();

  // function handleClearCart(e) {
  //   e.preventDefault();
  //   dispatch(clearCart(cart));
  // }
  if (!cart.length) return <EmptyCart />;
  return (
    <div className=" px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas, {username}
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>

        {/* <button>Clear cart</button> */}
      </div>
    </div>
  );
}

export default Cart;
