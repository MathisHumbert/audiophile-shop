import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { categoriesData } from '../../utils/data';

export default function Categories({ onClick }: { onClick?: () => void }) {
  return (
    <Wrapper>
      {categoriesData.map((item) => (
        <Link key={item.id} to={item.url} onClick={onClick}>
          <article>
            <img src={item.img} alt='title' />
            <h6>{item.title}</h6>
            <p className='subtitle'>
              shop <FaChevronRight />
            </p>
          </article>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 66px;

  a {
    text-decoration: none;
    width: 100%;
    color: var(--black-color);

    &:hover .subtitle {
      color: var(--orange-color);
      opacity: 1;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 165px;
    background: var(--grey-color);
    position: relative;
    border-radius: 8px;
  }

  img {
    width: 147px;
    margin-top: -50px;
  }

  .subtitle {
    display: flex;
    align-items: center;
    gap: 13px;
    text-decoration: none;
    color: var(--black-color);
    opacity: 0.5;
    margin-top: 17px;
    line-height: 0;
    transition: color 0.3s ease, opacity 0.3s ease;
  }

  svg {
    color: var(--orange-color);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;
