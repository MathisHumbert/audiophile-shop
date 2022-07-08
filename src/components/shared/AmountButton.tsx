import styled from 'styled-components';

interface Props {
  amount: number;
  incAmount: () => void;
  decAmount: () => void;
}

export default function AmountButton({ amount, incAmount, decAmount }: Props) {
  return (
    <Wrapper className='product-button'>
      <button onClick={decAmount}>-</button>
      <p className='subtitle'>{amount}</p>
      <button onClick={incAmount}>+</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--grey-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    background: 0;
    border: 0;
    color: var(--black-color);
    opacity: 0.25;
    font-size: 13px;
    line-height: 0;
    transition: all 0.3s ease;

    &:hover {
      color: var(--orange-color);
      opacity: 1;
    }
  }
`;
