import styled from 'styled-components';

export const InputsFormWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  position: relative;

  &.focused label {
    transform: translate(20px, -100%);
    background: white;
    letter-spacing: 1px;
    padding: 0 5px;
  }

  & * {
    letter-spacing: 0.3px;
    transition: 0.2s linear;
  }

  & label {
    font-size: 16px;
    margin-left: 5px;
    width: fit-content;
    position: absolute;
    pointer-events: none;
  }

  & input {
    font-size: 18px;
    padding: 5px;
    border: none;
    box-shadow: 0 0 1px 1px black;
    outline: none;
  }
`;
