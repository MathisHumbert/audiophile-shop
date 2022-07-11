import styled from 'styled-components';

interface Props {
  onChange: (value: boolean) => void;
  value: boolean;
  name: string;
  title: string;
}

export default function FormControlPayment({
  name,
  value,
  onChange,
  title,
}: Props) {
  return (
    <Wrapper
      className={value ? 'active main-checkbox' : 'main-checkbox'}
      onClick={() => onChange(name === 'emoney' ? true : false)}
    >
      <input
        type='checkbox'
        id={name}
        checked={value}
        onChange={() => onChange(name === 'emoney' ? true : false)}
      />
      <label htmlFor={name}>{title}</label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px 18px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 21px;
  transition: 0.3s border ease;
  cursor: pointer;

  &.active {
    border: 1px solid var(--orange-color);
  }

  &:hover {
    border: 1px solid var(--orange-color);
  }

  label {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
    cursor: pointer;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 20px;
    height: 20px;
    border: 1px solid #cfcfcf;
    border-radius: 50%;

    display: grid;
    place-content: center;
    cursor: pointer;
  }

  input[type='checkbox']::before {
    content: '';
    width: 10px;
    height: 10px;
    transform: scale(0);
    transition: transform 0.5s ease;
    border-radius: 50%;
    box-shadow: inset 1em 1em var(--orange-color);
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
`;
