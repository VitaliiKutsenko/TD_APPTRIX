import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & ul {
    width: 75%;
    height: 75%;
    cursor: auto;
    display: flex;
    flex-direction: column;

    &:hover {
      background: none;
    }

    & .type {
      display: flex;
      align-self: flex-end;
      margin: 15px;
    }

    & li {
      cursor: pointer;

      &:hover {
        background: rgba(245, 222, 179, 0.5);
      }
      & h4 {
        font-size: 20px;
      }
      & p {
        display: flex;
        font-size: 20px;
        align-items: center;
      }
    }
  }
`;
