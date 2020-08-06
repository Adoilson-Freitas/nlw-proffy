 import styled from 'styled-components';
 
export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;


  article {
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
  }

  article > p {
    padding: 0.2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  header div {
    margin-left: 2.4rem;
  }

  header div strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
  }

  header div span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }

  footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer p strong {
    color: var(--color-primary);
    font-size: 1.5rem;
    display: block;
    margin-left: 4px;
  }
 
  footer a p {
    font-size: 1.4rem;
  }

  footer a {
    width: 20rem;
    height: 5.6rem;
    margin-left: 4px;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    text-decoration: none;
  }

  footer a:hover {
    background: var(--color-secondary-dark);
  }

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }

  article header,
  article footer {
    padding: 3.2rem;
  }

  article > p {
    padding: 3.2rem;
  }


  footer p strong {
    display: initial;
    margin-left: 1.6rem;
  }

  footer a {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;
  }


  footer a img {
    margin-left: 1.6rem;
  }
`;

