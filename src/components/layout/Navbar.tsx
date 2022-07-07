import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../redux/app/store';
import {
  toggleCartAside,
  toggleMenuAside,
} from '../../redux/features/aside/asideSlice';
import { footerLinksData } from '../../utils/data';

export default function Navbar() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.aside);
  // const { amount } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <div className='center'>
        <button
          className={
            isMenuOpen ? 'bar-container bar-close' : 'bar-container bar-line'
          }
          onClick={() => dispatch(toggleMenuAside())}
        >
          <div className='bar1 bar'></div>
          <div className='bar2 bar'></div>
          <div className='bar3 bar'></div>
        </button>
        <Link to='/' className='logo'>
          <img src='/assets/shared/desktop/logo.svg' alt='company-logo' />
        </Link>
        <ul className='links'>
          {footerLinksData.map((item) => {
            const { id, title, url } = item;
            return (
              <li className='subtitle' key={id}>
                <Link to={url}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <button
          className='checkout'
          onClick={() => dispatch(toggleCartAside())}
        >
          <img
            src='/assets//shared/desktop/icon-cart.svg'
            alt='checkout-logo'
          />
          {/* <div className='cart-amount'>{amount}</div> */}
          <div className='cart-amount'>0</div>
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: var(--black-color);

  .center {
    padding: 32px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
  }

  .checkout {
    background: 0;
    border: 0;
    position: relative;
  }

  .cart-amount {
    position: absolute;
    display: grid;
    place-items: center;
    top: 0;
    right: 0;
    transform: translate(10%, -40%);
    width: 20px;
    height: 20px;
    background: var(--orange-color);
    color: var(--white-color);
    font-size: 12px;
    font-weight: 700;
    border-radius: 50%;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .links {
    display: none;
  }

  @media (min-width: 768px) {
    .center {
      padding: 32px 40px;
    }

    .logo {
      left: 98px;
      transform: translate(0, -50%);
    }
  }

  @media (min-width: 1440px) {
    .bar-container {
      display: none;
    }

    .logo {
      position: relative;
      top: initial;
      left: initial;
      transform: translate(0, 0);
    }

    .links {
      display: flex;
      gap: 34px;
    }
  }
`;
