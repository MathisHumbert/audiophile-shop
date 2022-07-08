import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/app/store';
import { formatPrice } from '../../utils/helpers';
import { toggleCartInfo, clearCart } from '../../redux/features/cart/cartSlice';
import { toggleCartAside } from '../../redux/features/aside/asideSlice';
import CartAsideItem from './CartAsideItem';

export default function CartAside() {
  const dispatch = useDispatch();
  const { cart, total, amount } = useSelector((state: RootState) => state.cart);
  const { isCartOpen } = useSelector((state: RootState) => state.aside);

  useEffect(() => {
    dispatch(toggleCartInfo());

    // eslint-disable-next-line
  }, [cart]);

  const handleClick = (e: any) => {
    if (!e.target.classList.contains('cart-aside')) return;
    dispatch(toggleCartAside());
  };

  return (
    <Wrapper
      className={isCartOpen ? 'cart-aside open' : 'cart-aside'}
      onClick={handleClick}
    >
      <div className='content'>
        {cart.length === 0 ? (
          <div className='empty'>
            <h6>
              Your cart is empty. <br /> Fill it!
            </h6>
          </div>
        ) : (
          <>
            <header>
              <h6>cart ({amount})</h6>
              <button className='body' onClick={() => dispatch(clearCart())}>
                Remove all
              </button>
            </header>
            <div className='items-container'>
              {cart.map((item) => {
                return <CartAsideItem key={item.id} {...item} />;
              })}
            </div>
            <footer>
              <div className='price'>
                <p className='body'>total</p>
                <h6>{formatPrice(total)}</h6>
              </div>
              <Link
                to='/checkout'
                className='btn'
                onClick={() => dispatch(toggleCartAside())}
              >
                checkout
              </Link>
            </footer>
          </>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  padding: 24px;
  margin-top: 86px;

  .content {
    background: var(--white-color);
    padding: 32px 28px;
    max-width: 488px;
    cursor: initial;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .empty {
    text-align: center;
  }

  header {
    display: flex;
    justify-content: space-between;

    .body {
      text-decoration: underline;
      opacity: 0.5;
      cursor: pointer;
      border: 0;
      background: 0;
      transition: all 0.3s ease;

      &:hover {
        color: var(--orange-color);
        opacity: 1;
      }
    }
  }

  .items-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .price {
    display: flex;
    justify-content: space-between;

    .body {
      opacity: 0.6;
      text-transform: uppercase;
    }
  }

  .btn {
    margin-top: 24px;
    width: 100%;
  }

  h6 {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.3px;
  }

  @media (min-width: 768px) {
    .content {
      margin: 0 40px;
      margin-left: auto;
    }
  }

  @media (min-width: 1440px) {
    padding: 32px 0;
    .content {
      margin: 0 165px;
      margin-left: auto;
    }
  }
`;
