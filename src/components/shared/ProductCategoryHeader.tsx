import styled from 'styled-components';

export default function ProductCategoryHeader({ title }: { title: string }) {
  return (
    <Wrapper>
      <h4>{title}</h4>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  height: 102px;
  background: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    color: var(--white-color);
  }

  @media (min-width: 247px) {
    height: 247px;
  }
`;
