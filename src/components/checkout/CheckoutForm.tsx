// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// import FormControl from './FormControl';
// import FormControlPayment from './FormControlPayment';

export default function CheckoutForm() {
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <h3>checkout</h3>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  background: var(--white-color);
  padding: 32px 24px;
  border-radius: 8px;

  h3 {
    margin-bottom: 2rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &.checkboxes {
      gap: 1rem;
    }
  }

  .subtitle {
    color: var(--orange-color);
    line-height: 25px;
    margin-bottom: 1rem;
  }

  .label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.21px;
    line-height: 16px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
  }

  .cash-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 48px;
    }
    .body {
      opacity: 0.5;
    }
  }

  @media (min-width: 768px) {
    padding: 30px 27px;

    h3 {
      margin-bottom: 41px;
    }

    .form-container {
      gap: 56px;
    }

    .billing-details,
    .shipping-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px 1rem;
    }

    .shipping-info .control-form:first-child {
      grid-column: 1 / 3;
    }

    .checkboxes {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .main-checkbox:last-child {
        grid-column: 2/3;
      }
    }

    .emoney {
      flex-direction: row;
      gap: 1rem;
    }

    .cash-container {
      flex-direction: row;
      gap: 2rem;
    }
  }

  @media (min-width: 1440px) {
    width: 730px;
  }
`;