import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { toggleCheckoutAside } from '../redux/features/aside/asideSlice';
import MainCenter from '../components/shared/MainCenter';
import GoBack from '../components/shared/GoBack';
import FormControl from '../components/checkout/FormControl';
import FormControlPayment from '../components/checkout/FormControlPayment';
import Summary from '../components/checkout/Summary';

interface FormInput {
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

export default function Checkout() {
  const [isEmoney, setIsEmoeny] = useState(true);
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      emoney: '',
      emoneyNumber: '',
      emoneyPin: '',
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    dispatch(toggleCheckoutAside());
  };

  return (
    <MainCenter>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoBack />
        <Wrapper>
          <div className='form-wrapper'>
            <h3>checkout</h3>
            {/* BILLING DETAILS */}
            <div className='form-container'>
              <div className='form-group'>
                <p className='subtitle'>billing details</p>
                <div className='inputs-container billing-details'>
                  {/* NAME */}
                  <Controller
                    control={control}
                    name='name'
                    rules={{ required: 'This field is required' }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='name'
                        type='text'
                        title='Name'
                        placeholder='Alexei Ward'
                      />
                    )}
                  />
                  {/* EMAIL */}
                  <Controller
                    control={control}
                    name='email'
                    rules={{
                      required: 'This field is required',
                    }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='email'
                        type='text'
                        title='Email Address'
                        placeholder='alexei@mail.com'
                      />
                    )}
                  />
                  {/* PHONE */}
                  <Controller
                    control={control}
                    name='phone'
                    rules={{ required: 'This field is required' }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='phone'
                        type='number'
                        title='Phone Number'
                        placeholder='+1 202-555-0136'
                      />
                    )}
                  />
                </div>
              </div>
              {/* SHIPPING INFO */}
              <div className='form-group'>
                <p className='subtitle'>shipping info</p>
                <div className='inputs-container shipping-info'>
                  {/* ADDRESS */}
                  <Controller
                    control={control}
                    name='address'
                    rules={{ required: 'This field is required' }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='address'
                        type='text'
                        title='Your Address'
                        placeholder='1137 Williams Avenue'
                      />
                    )}
                  />
                  {/* ZIP */}
                  <Controller
                    control={control}
                    name='zip'
                    rules={{ required: 'This field is required' }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='zip'
                        type='number'
                        title='ZIP Code'
                        placeholder='10001'
                      />
                    )}
                  />
                  {/* CITY */}
                  <Controller
                    control={control}
                    name='city'
                    rules={{ required: 'This field is required' }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='city'
                        type='text'
                        title='City'
                        placeholder='New York'
                      />
                    )}
                  />
                  {/* COUNTRY */}
                  <Controller
                    control={control}
                    name='country'
                    rules={{ required: 'This field is required' }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        error={error}
                        name='country'
                        type='text'
                        title='Country'
                        placeholder='United States'
                      />
                    )}
                  />
                </div>
              </div>
              {/* PAYMENT DETAILS */}
              <div className='form-group'>
                <p className='subtitle'>payement details</p>
                <div className='inputs-container checkboxes'>
                  <p className='label'>Payment Method</p>
                  <FormControlPayment
                    name='emoney'
                    value={isEmoney}
                    onChange={setIsEmoeny}
                    title='e-Money'
                  />
                  <FormControlPayment
                    name='cash'
                    value={!isEmoney}
                    onChange={setIsEmoeny}
                    title='Cash on Delivery'
                  />
                </div>
              </div>
              <div className='form-group'>
                {isEmoney ? (
                  // EMONEY
                  <div className='inputs-container emoney'>
                    {/* EMONEY NUMBER */}
                    <Controller
                      control={control}
                      name='emoneyNumber'
                      rules={{ required: 'This field is required' }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <FormControl
                          onChange={onChange}
                          value={value}
                          error={error}
                          name='emoneyNumber'
                          type='number'
                          title='e-Money Number'
                          placeholder='238521993'
                        />
                      )}
                    />
                    {/* EMONEY PIN */}
                    <Controller
                      control={control}
                      name='emoneyPin'
                      rules={{ required: 'This field is required' }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <FormControl
                          onChange={onChange}
                          value={value}
                          error={error}
                          name='emoneyPin'
                          type='number'
                          title='e-Money PIN'
                          placeholder='6891'
                        />
                      )}
                    />
                  </div>
                ) : (
                  // CASH
                  <div className='cash-container'>
                    <img src='/assets/cart/cash-icon.svg' alt='cash' />
                    <p className='body'>
                      The 'Cash on Delivery' option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Summary />
        </Wrapper>
      </form>
    </MainCenter>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 98px;

  .form-wrapper {
    background: var(--white-color);
    padding: 32px 24px;
    border-radius: 8px;
  }

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
    margin-bottom: 116px;

    .form-wrapper {
      padding: 30px 27px;
    }

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
    .form-wrapper {
      width: 730px;
    }

    flex-direction: row;
    gap: 30px;
    margin-bottom: 141px;
  }
`;
