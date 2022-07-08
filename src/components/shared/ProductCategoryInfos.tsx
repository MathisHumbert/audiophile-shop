import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ProductCategory } from '../../product';

export default function ProductCategoryInfos({
  products,
}: {
  products: ProductCategory[];
}) {
  return (
    <Wrapper>
      {products.map((item) => {
        const { id, img, isNew, title, text, url } = item;
        return (
          <article key={id}>
            <picture>
              <source media='(max-width: 768px)' srcSet={img.mobile} />
              <source media='(max-width: 1440px)' srcSet={img.tablet} />
              <source media='(min-width: 1440px)' srcSet={img.desktop} />
              <img src={img.mobile} alt={title} />
            </picture>
            <div className='info'>
              {isNew && <p className='overline'>new product</p>}
              <h2>{title}</h2>
              <p className='body'>{text}</p>
              <Link to={url} className='btn'>
                see product
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 64px 0 120px;
  display: flex;
  flex-direction: column;
  gap: 120px;

  article {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;
  }

  img {
    width: 100%;
    max-height: 352px;
    object-fit: cover;
    border-radius: 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    max-width: 572px;
  }

  .overline {
    color: var(--orange-color);
  }

  .body {
    opacity: 0.5;
  }

  @media (min-width: 1440px) {
    padding: 160px 0;
    gap: 160px;

    article {
      flex-direction: row;
      gap: 125px;
      text-align: left;
    }

    article:nth-child(even) {
      flex-direction: row-reverse;
    }

    img {
      max-height: 560px;
      min-height: 560px;
      width: 540px;
    }

    .info {
      gap: 1rem;
      align-items: flex-start;
      max-width: 572px;

      .body {
        margin: 1rem 0 24px;
      }
    }
  }
`;
