import styled from 'styled-components';

const ToastSuccessStyled = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 64px;
  position: absolute;
  opacity: 0.9;
  right: 6px;
  top: 6px;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 2px;

  &:hover {
    opacity: 1;
  }

`;

const SpanToastText = styled.span`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 400;
`;

const ToastCloseButton = styled.span`
  color: #FFFFFF;
`;

export {ToastSuccessStyled, SpanToastText, ToastCloseButton};