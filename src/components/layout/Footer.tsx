import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

import { footerLinksData } from '../../utils/data';

export default function Footer() {
  return (
    <Wrapper>
      <div className='center'>
        <div className='top-bar'></div>
        <Link to='/'>
          <img src='/assets/shared/desktop/logo.svg' alt='company-logo' />
        </Link>
        <ul className='links'>
          {footerLinksData.map((item) => (
            <li className='subtitle' key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <p className='body text'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className='bottom'>
          <p className='body'>Copyright 2021. All Rights Reserved</p>
          <ul className='icons'>
            <li>
              <a href='/'>
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: var(--light-black-color);

  .center {
    padding: 52px 24px 38px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    text-align: center;
    position: relative;
  }

  .top-bar {
    position: absolute;
    top: 0;
    width: 101px;
    height: 4px;
    background: var(--orange-color);
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .icons {
    display: flex;
    gap: 1rem;
    transition: color 0.3s ease;

    li a svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: var(--orange-color);
    }
  }

  .body {
    color: var(--white-color);
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    .center {
      padding: 60px 40px 46px 40px;
      align-items: flex-start;
      gap: 2rem;
    }

    .links {
      flex-direction: row;
      gap: 34px;
    }

    .body {
      text-align: justify;
    }

    .bottom {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      margin-top: 48px;
    }
  }

  @media (min-width: 1440px) {
    .center {
      max-width: 1100px;
      padding: 75px 0 48px 0;
      margin: 0 auto;
    }

    .text {
      max-width: 540px;
    }

    .links {
      position: absolute;
      transform: translateY(4px);
      right: 0;
    }

    .icons {
      transform: translateY(-88px);
    }
  }
`;
