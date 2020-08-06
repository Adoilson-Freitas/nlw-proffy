 import styled from 'styled-components';
 
 export const TeacherPage = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
 `;
 
 export const Form = styled.div`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }
  button {
    width: 8rem;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 2.2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    margin-top: 2rem;
    outline: none;
  }

   button:hover {
    background: var(--color-secondary-dark);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1.8fr 1.8fr 1.8fr 1fr;
    column-gap: 16px;
    position: absolute;
    right: -30px;
    bottom: -28px;

  .input-block + .input-block {
    margin-top: 0;
  }

  button {
      margin-top: 6.2rem;
  }
  }
`;
