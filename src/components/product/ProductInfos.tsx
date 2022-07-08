import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import AmountButton from '../shared/AmountButton';
import { formatPrice } from '../../utils/helpers';
import { addItemToCart } from '../../redux/features/cart/cartSlice';
import { toggleCartAside } from '../../redux/features/aside/asideSlice';
import { ProductTypes } from '../../product';

export default function ProductInfos({
  description,
  image,
  name,
  new: isNew,
  price,
  slug,
  shortName,
}: ProductTypes) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const incAmount = () => {
    setAmount((prevState) => prevState + 1);
  };

  const decAmount = () => {
    setAmount((prevState) => {
      if (prevState === 1) {
        return 1;
      }
      return prevState - 1;
    });
  };

  const addToCart = () => {
    const item = {
      id: slug,
      name: shortName,
      price,
      amount,
      img: `/assets/cart/image-${slug}.jpg`,
    };
    dispatch(addItemToCart(item));
    dispatch(toggleCartAside());
    setAmount(1);
  };

  return (
    <Wrapper>
      <picture>
        <source media='(max-width: 768px)' srcSet={image.mobile} />
        <source media='(max-width: 1440px)' srcSet={image.tablet} />
        <source media='(min-width: 1440px)' srcSet={image.desktop} />
        <img src={image.mobile} alt={name} />
      </picture>
      <div className='container'>
        {isNew && <p className='overline'>new product</p>}
        <h4>{name}</h4>
        <p className='body'>{description}</p>
        <h6>{formatPrice(price)}</h6>
        <div className='btn-container'>
          <AmountButton
            amount={amount}
            incAmount={incAmount}
            decAmount={decAmount}
          />
          <button className='btn' onClick={addToCart}>
            add to cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  img {
    width: 100%;
    max-height: 480px;
    object-fit: cover;
    border-radius: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .overline {
    color: var(--orange-color);
  }

  .body {
    opacity: 0.5;
  }

  .product-button {
    width: 120px;
    height: 48px;
    margin-right: 2rem;
    margin-top: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 69px;

    img {
      min-width: 281px;
    }

    .container {
      max-width: 445px;
    }
  }

  @media (min-width: 1440px) {
    gap: 125px;

    img {
      max-height: 560px;
      min-width: 540px;
    }

    .container {
      gap: 1rem;
    }

    .body {
      margin: 1rem 0;
    }

    .product-button {
      margin-top: 30px;
    }
  }
`;
