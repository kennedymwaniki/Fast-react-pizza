/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentQuantityById,
  increaseItemQuantity,
  decreaseItemQuantity,
} from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <spann className="text-sm font-bold text-red-600">
        {currentQuantity}
      </spann>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
