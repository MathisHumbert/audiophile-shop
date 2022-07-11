import styled from 'styled-components';
import { formatPrice } from '../../utils/helpers';

interface Props {
  name: string;
  price: number;
  amount: number;
  img: string;
}

export default function SummaryItem({ name, price, amount, img }: Props) {
  return (
    <Wrapper>
      <div className='left'>
        <img src={img} alt={name} />
        <div className='info'>
          <p className='body item-name'>{name}</p>
          <p className='body item-price'>{formatPrice(price)}</p>
        </div>
      </div>
      <p className='right body'>x{amount}</p>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  .item-name {
    font-weight: 700;
  }

  .item-price,
  .right {
    font-weight: 700;
    opacity: 0.5;
  }
`;
