import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Wrapper>
      <div className='center'>
        <div className='info'>
          <p className='overline'>new product</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p className='body'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to='/products/xx99-mark-two-headphones' className='btn'>
            see product
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: calc(100vh - 86px);
  width: 100%;
  background-image: url('/assets/home/mobile/image-header.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  .info {
    text-align: center;
    padding: 0 24px;
  }

  .overline {
    color: var(--white-color);
    opacity: 0.5;
  }

  h1 {
    color: var(--white-color);
    margin-top: 16px;
    margin-bottom: 24px;
    max-width: 396px;
  }

  .body {
    color: var(--white-color);
    opacity: 0.75;
    max-width: 350px;
    margin: 0 auto;
  }

  .btn {
    margin-top: 28px;
  }

  @media (min-width: 768px) {
    background-image: url('/assets/home/mobile/image-header.jpg');
    margin-bottom: 96px;
  }

  @media (min-width: 1440px) {
    background-image: url('/assets/home/mobile/image-header.jpg');
    margin-bottom: 120px;
    align-items: center;
    justify-content: initial;

    .center {
      width: 100%;
      padding: 0 40px;
      display: flex;
      justify-content: center;
    }

    .info {
      width: 100%;
      max-width: 1100px;
      padding: 0;
      text-align: left;
    }

    .body {
      margin: 0;
    }
  }
`;
