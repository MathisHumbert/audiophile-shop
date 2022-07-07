import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../redux/app/store';
import Categories from '../shared/Categories';
import { toggleMenuAside } from '../../redux/features/aside/asideSlice';

export default function MenuAside() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.aside);

  const onClick = () => {
    dispatch(toggleMenuAside());
  };

  const handleClick = (e: any) => {
    if (!e.target.classList.contains('menu-aside')) return;
    dispatch(toggleMenuAside());
  };

  return (
    <Wrapper
      className={isMenuOpen ? 'menu-aside open' : 'menu-aside'}
      onClick={handleClick}
    >
      <div className='content'>
        <Categories onClick={onClick} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  top: 86.27px;
  padding-bottom: 40px;

  .content {
    cursor: initial;
    background: var(--white-color);
    padding: 32px 28px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .content {
      padding: 56px 40px 66px 40px;
    }
  }
`;
