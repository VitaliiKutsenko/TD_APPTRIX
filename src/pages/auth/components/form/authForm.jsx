import React from 'react';
import { AuthFormWrapper } from './authFormStyled';
import { useForm } from 'react-hook-form';
import { InputsForm } from '../inputsForm/inputsForm';
import { authFields } from '../../../../schemas/authSchema';

export const AuthForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const renderInput = schema => {
    return schema.map(item => {
      return (
        <InputsForm
          key={item.id}
          text={item.text}
          type={item.inputType}
          point={item.point}
          register={register}
          getValues={getValues}
        />
      );
    });
  };

  const getSubmitData = field => {
    onSubmit(field);
  };

  return (
    <AuthFormWrapper onSubmit={handleSubmit(getSubmitData)}>
      <ul>{renderInput(authFields)}</ul>
      <input className="form-submit" type="submit" value="Confirm" />
    </AuthFormWrapper>
  );
};
