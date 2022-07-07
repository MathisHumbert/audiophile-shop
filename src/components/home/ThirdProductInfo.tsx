import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ThirdProductInfo() {
  return (
    <Wrapper>
      <div className='top'></div>
      <div className='bottom'>
        <h4>yx1 earphones</h4>
        <Link to='/products/yx1-earphones' className='btn transparent'>
          see products
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .top {
    width: 100%;
    height: 200px;
    background-image: url('/assets/home/mobile/image-earphones-yx1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
  }

  .bottom {
    width: 100%;
    height: 200px;
    background: var(--grey-color);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    h4,
    a {
      margin-left: 24px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 11px;

    .top {
      height: 320px;
      background-image: url('/assets/home/tablet/image-earphones-yx1.jpg');
    }

    .bottom {
      height: 320px;

      h4,
      a {
        margin-left: 41px;
      }
    }
  }

  @media (min-width: 1440px) {
    gap: 30px;

    .top {
      background-image: url('/assets/home/desktop/image-earphones-yx1.jpg');
    }

    .bottom {
      h4,
      a {
        margin-left: 95px;
      }
    }
  }
`;
