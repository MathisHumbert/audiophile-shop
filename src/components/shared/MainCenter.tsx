import styled from 'styled-components';

export default function MainCenter({ children }: { children: JSX.Element }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
  padding: 0 24px;
  max-width: 1100px;
  margin: 0 auto;
`;
