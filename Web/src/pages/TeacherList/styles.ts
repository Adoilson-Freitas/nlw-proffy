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

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

  .input-block + .input-block {
    margin-top: 0;
  }

  }
`;
