import styled from 'styled-components';

import MainCenter from '../components/shared/MainCenter';
import GoBack from '../components/shared/GoBack';
import CheckoutForm from '../components/checkout/CheckoutForm';

export default function Checkout() {
  return (
    <MainCenter>
      <>
        <GoBack />
        <Wrapper>
          <CheckoutForm />
        </Wrapper>
      </>
    </MainCenter>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 98px;

  @media (min-width: 768px) {
    margin-bottom: 116px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
    margin-bottom: 141px;
  }
`;
