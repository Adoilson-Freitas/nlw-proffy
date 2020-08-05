 import styled from 'styled-components';
 
 export const FormPage = styled.div`
  width: 100vw;
  height: 100vh;
 
  .header-content {
    margin-bottom: 6.4rem;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    .header-content {
       margin-bottom: 0;
    }
    
  }
 `;
 
  
 export const Main = styled.main`
    background: var(--color-box-base);
    widows: 100%;
    max-width: 74rem;
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    fieldset {
      border: 0;
      padding: 0 2.4rem;
    }

    fieldset + fieldset{
      margin-top: 6.4rem;
    }

    legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  legend button {
  background: none;
  border: 0;
  color: var(--color-primary);
  font: 700 1.6rem Archivo;
  cursor: pointer;
  transition: color 0.2s;
}

legend button:hover {
  color: var(--color-primary-dark);
}


  footer {
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
}

footer p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-text-complement);
}

footer p img {
  margin-right: 2rem;
}



footer button {
  width: 100%;
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  cursor: pointer;
  border-radius: 0.8rem;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
}

footer button:hover {
  background: var(--color-secondary-dark);
}
    
@media (min-width: 700px) {
   fieldset {
     padding: 0 6.4rem;
   }

  .schedule-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 1.6rem;
}

   footer {
     padding: 4rem 6.4rem;
     display: flex;
     align-items: center;
     justify-content: space-between;
   }

   footer p {
     justify-content: space-between;
   }

   footer button {
     width: 20rem;
     margin-top: 0;
   }
  }
 `;
 
 