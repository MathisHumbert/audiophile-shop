import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import FormControl from './FormControl';

export interface FormInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  emoney: string;
  emoneyNumber: string;
  emoneyPin: string;
}

export default function CheckoutForm() {
  const { control, watch, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  console.log(watch());

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h3>checkout</h3>
      <Controller
        control={control}
        name='name'
        rules={{ required: 'Un téléphone est requis' }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <FormControl
            // onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            error={error}
            // inputRef={ref}
            name='name'
            type='text'
            title='Name'
            placeholder='Alexei Ward'
          />
        )}
      />
      <Controller
        control={control}
        name='email'
        rules={{ required: 'Un email est requis' }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <FormControl
            // onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            error={error}
            // inputRef={ref}
            name='email'
            type='text'
            title='Email Address'
            placeholder='alexei@mail.com'
          />
        )}
      />
      <button type='submit'>submit</button>
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
