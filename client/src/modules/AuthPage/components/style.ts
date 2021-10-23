/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  height: 100vh;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const LinksWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 80%;
  font-size: 14px;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;

interface IShowFormContainer {
  isOpen: boolean;
}

export const ShowFormContainer = styled.div<IShowFormContainer>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;
