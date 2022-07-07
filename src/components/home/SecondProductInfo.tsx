import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SecondProductInfo() {
  return (
    <Wrapper>
      <div className='info'>
        <h4>zx7 speaker</h4>
        <Link to='/products/zx7-speaker' className='btn transparent'>
          see products
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  height: 320px;
  background-image: url('assets/home/mobile/image-speaker-zx7.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;

  .info {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (min-width: 768px) {
    background-image: url('assets/home/tablet/image-speaker-zx7.jpg');
  }

  @media (min-width: 1440px) {
    background-image: url('assets/home/desktop/image-speaker-zx7.jpg');

    .info {
      margin-left: 95px;
    }
  }
`;
