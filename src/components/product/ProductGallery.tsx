import styled from 'styled-components';

import { ProductGallery as ProductGalleryTypes } from '../../product';

export default function ProductGallery({
  gallery,
}: {
  gallery: ProductGalleryTypes;
}) {
  const { first, second, third } = gallery;

  return (
    <Wrapper>
      <div className='left'>
        <picture>
          <source media='(max-width: 768px)' srcSet={first.mobile} />
          <source media='(max-width: 1440px)' srcSet={first.tablet} />
          <source media='(min-width: 1440px)' srcSet={first.desktop} />
          <img src={first.mobile} alt='first-img' />
        </picture>
        <picture>
          <source media='(max-width: 768px)' srcSet={second.mobile} />
          <source media='(max-width: 1440px)' srcSet={second.tablet} />
          <source media='(min-width: 1440px)' srcSet={second.desktop} />
          <img src={second.mobile} alt='second-img' />
        </picture>
      </div>
      <picture className='right'>
        <source media='(max-width: 768px)' srcSet={third.mobile} />
        <source media='(max-width: 1440px)' srcSet={third.tablet} />
        <source media='(min-width: 1440px)' srcSet={third.desktop} />
        <img src={third.mobile} alt='third-img' />
      </picture>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 88px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      max-height: 174px;
    }
  }

  .right img {
    max-height: 368px;
  }

  @media (min-width: 768px) {
    padding-top: 120px;
    flex-direction: row;
    width: 100%;

    .right img {
      max-height: 592px;
    }

    .left img {
      max-height: 280px;
    }
  }

  @media (min-width: 1440px) {
    .left {
      gap: 32px;
    }

    padding-top: 160px;
  }
`;
