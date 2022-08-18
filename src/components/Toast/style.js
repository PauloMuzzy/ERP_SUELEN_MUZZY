import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  width: 256px;
  height: 64px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 16px;
`;

const Title = styled.strong`
  font-size: 16px;
  color: ${props => props.color};
`;

const CloseButton = styled.button`
  background: none;
  color: ${props => props.color};
  border: none;
  cursor: pointer;
  outline: none;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: calc(100% - 32px);
  padding: 0 16px;
`;

const Text = styled.span`
  font-size: 14px;
  text-align: start;
  color: ${props => props.color};
`;

export {Container, Header, CloseButton, Title, Body, Text};