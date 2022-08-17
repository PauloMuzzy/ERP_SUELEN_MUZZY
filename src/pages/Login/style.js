import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#4f5bd5, #962fbf);
  color: #fff;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  /* @media (max-width: 300px) {
    form {
      width: 90vw;
    }
  } */

`;

const TextoFormulario = styled.span`
      color: #8c8c8c;
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 700;
`;

export  {Container, TextoFormulario};