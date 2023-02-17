import React, { useState } from 'react';
import { InputsFormWrapper } from './inputsFormStyled';

export const InputsForm = ({ text, type, point, register, getValues }) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputsFormWrapper className={`${focus ? 'focused' : ''}`}>
      <label htmlFor={text}>{text}</label>
      <input
        autoComplete="off"
        type={type}
        name={text}
        {...register(point)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          if (getValues(point).length < 1) {
            setFocus(false);
          }
        }}
      />
    </InputsFormWrapper>
  );
};
