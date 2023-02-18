import styled from 'styled-components';

export const UsersListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  list-style: none;
  gap: 5px;
  height: 100%;
  min-width: calc(100% / 3);
  flex-direction: column-reverse;
  padding: 10px;
  box-shadow: 0 0 5px 1px black;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s linear;

  & * {
    transition: 0.3s linear;
  }

  &:hover {
    background: rgba(14, 185, 211, 0.3);

    & li {
      background: rgba(255, 255, 255, 0.9);
    }
  }

  & li {
    width: 100%;
    display: flex;
    align-items: center;
    flex: 1 1 100%;
    gap: 10px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.31);
    border-radius: 5px;
    background: white;

    & h4 {
      flex: 0 0 20%;
      padding: 5px;
    }

    & p {
      display: block;
      width: 100%;
      height: 100%;
      padding: 5px;
    }
  }
`;
