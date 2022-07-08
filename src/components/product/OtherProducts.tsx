import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ProductOthers } from '../../product';

export default function OtherProducts({
  featured,
}: {
  featured: ProductOthers[];
}) {
  return (
    <Wrapper>
      <h3 className='title'>you may also like</h3>
      <div className='container'>
        {featured.map((item, index) => {
          const { image, name, slug } = item;
          return (
            <article key={index}>
              <div className='img-container'>
                <picture>
                  <source media='(max-width: 768px)' srcSet={image.mobile} />
                  <source media='(max-width: 1440px)' srcSet={image.tablet} />
                  <source media='(min-width: 1440px)' srcSet={image.desktop} />
                  <img src={image.mobile} alt='first-img' />
                </picture>
              </div>
              <h4>{name}</h4>
              <Link to={`/products/${slug}`} className='btn'>
                see product
              </Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 120px 0;

  .title {
    text-align: center;
    margin-bottom: 40px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .title {
      margin-bottom: 56px;
    }

    .container {
      flex-direction: row;
      align-items: center;
      gap: 11px;
    }
  }

  @media (min-width: 1440px) {
    padding: 160px 0;

    img {
      min-height: 318px;
    }
  }
`;
