import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function FirstProductInfo() {
  return (
    <Wrapper>
      <picture>
        <source
          media='(max-width: 768px)'
          srcSet='/assets/home/mobile/image-speaker-zx9.png'
        />
        <source
          media='(max-width: 1440px)'
          srcSet='/assets/home/tablet/image-speaker-zx9.png'
        />
        <source
          media='(min-width: 1440px)'
          srcSet='/assets/home/desktop/image-speaker-zx9.png'
        />
        <img
          srcSet='/assets/home/mobile/image-speaker-zx9.png'
          alt='zx9-speaker'
        />
      </picture>
      <div className='info'>
        <h1>
          zx9 <br /> speaker
        </h1>
        <p className='body'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to='/products/zx9-speaker' className='btn'>
          see product
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 55px 24px;
  height: 600px;
  background: var(--orange-color);
  background-image: url('/assets/home/desktop/pattern-circles.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  img {
    width: 172px;
  }

  .info {
    text-align: center;
  }

  h1,
  .body {
    color: var(--white-color);
    margin: 24px 0 24px 0;
    max-width: 350px;
  }

  .body {
    opacity: 0.75;
  }

  .btn {
    background: var(--black-color);

    &:hover {
      background: #4c4c4c;
    }
  }

  @media (min-width: 768px) {
    padding: 52px 0 64px;
    height: 600px;

    img {
      width: 197px;
    }
  }

  @media (min-width: 1440px) {
    padding: 0;
    height: 560px;
    flex-direction: row;
    gap: 140px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 410px;
      transform: translateY(10%);
    }

    .info {
      text-align: left;
      margin-bottom: 4rem;
    }
  }
`;
