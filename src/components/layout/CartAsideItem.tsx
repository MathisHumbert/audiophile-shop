import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AmountButton from '../shared/AmountButton';
import { formatPrice } from '../../utils/helpers';
import {
  deleteItem,
  decItemAmount,
  incItemAmount,
} from '../../redux/features/cart/cartSlice';

import { CartItem } from '../../redux/features/cart/cartSlice';

export default function CartAsideItem({
  id,
  name,
  price,
  amount,
  img,
}: CartItem) {
  const dispatch = useDispatch();

  const decAmount = () => {
    if (amount === 1) {
      dispatch(deleteItem(id));
    } else {
      dispatch(decItemAmount(id));
    }
  };

  const incAmount = () => {
    dispatch(incItemAmount(id));
  };
  return (
    <Wrapper>
      <div className='left'>
        <img src={img} alt={name} />
        <div className='item-info'>
          <p className='body item-name'>{name}</p>
          <p className='body item-price'>{formatPrice(price)}</p>
        </div>
      </div>
      <AmountButton
        amount={amount}
        decAmount={decAmount}
        incAmount={incAmount}
      />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    gap: 1rem;
  }

  .product-button {
    min-width: 96px;
    min-height: 2rem;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  .item-name {
    font-weight: 700;
  }

  .item-price {
    font-weight: 700;
    opacity: 0.5;
  }
`;
