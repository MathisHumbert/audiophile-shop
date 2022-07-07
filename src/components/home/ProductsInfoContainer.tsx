import styled from 'styled-components';

import FirstProductInfo from './FirstProductInfo';
import SecondProductInfo from './SecondProductInfo';
import ThirdProductInfo from './ThirdProductInfo';

export default function ProductsInfoContainer() {
  return (
    <Wrapper>
      <FirstProductInfo />
      <SecondProductInfo />
      <ThirdProductInfo />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 768px) {
    gap: 48px;
    padding-top: 168px;
  }
`;
