import styled from 'styled-components';

export const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 4px rgb(14, 185, 211);
  padding: 50px;

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  & .form-submit {
    padding: 5px;
    cursor: pointer;
    border: none;
    transition: 0.3s linear;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
      transition: 0.3s linear;
      box-shadow: inset 0 -10px 50px -3px rgba(17, 206, 212, 0.5);
    }
  }
`;
