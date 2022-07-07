import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper className='about-section'>
      <picture>
        <source
          media='(max-width: 768px)'
          srcSet='/assets/shared/mobile/image-best-gear.jpg'
        />
        <source
          media='(max-width: 1440px)'
          srcSet='/assets/shared/tablet/image-best-gear.jpg'
        />
        <source
          media='(min-width: 1440px)'
          srcSet='/assets/shared/desktop/image-best-gear.jpg'
        />
        <img
          srcSet='/assets/shared/mobile/image-best-gear.jpg'
          alt='about-img'
        />
      </picture>
      <div>
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className='body'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 300px;
    max-height: 300px;
  }

  div {
    max-width: 573px;
    margin: 0 auto;
  }

  .body {
    opacity: 0.5;
    margin-top: 2rem;
  }

  span {
    color: var(--orange-color);
  }

  @media (min-width: 768px) {
    gap: 62px;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 125px;
    text-align: left;
    padding: 160px 0;

    img {
      width: 540px;
      height: 588px;
      max-height: 588px;
    }
  }
`;
