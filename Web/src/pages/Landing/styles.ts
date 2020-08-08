 import styled from 'styled-components';
 
 export const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

.logo-container {
  text-align: center;
  margin-bottom: 3.2rem;
}

.logo-container img {
  height: 8rem;
}

.logo-container h2 {
  font-weight: 500;
  font-size: 2.0rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
}

.hero-image {
  width: 90%;
  margin-left: 5%;
  height: 100%;

}

.buttons-container {
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
}

.buttons-container a {
  width: 30rem;
  height: 6.4rem;
  border-radius: 0.8rem;
  font: 700 1.5rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;
}

.buttons-container a:first-child {
  margin-right: 1.6rem;
}

.buttons-container a img {
  width: 3rem;
  margin-right: 1.4rem;
}

.buttons-container a.study {
  background: var(--color-primary-lighter);
}

.buttons-container a.study:hover {
  background: var(--color-primary-light);
}

.buttons-container a.give-classes {
  background: var(--color-secondary);
}

.buttons-container a.give-classes:hover {
  background: var(--color-secondary-dark);
}

.total-connections {
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.total-connections img {
  margin-left: 0.8rem;
}

@media (min-width: 600px) {
  .hero-image {
    width: 60%;
    margin-left: 20%;

  }
  .logo-container img {
    height: 10rem;
  }

  .logo-container h2 {
    font-size: 2.4rem;
  }
    
  .buttons-container a {
    height: 10.4rem;
    font: 700 2rem Archivo;
  }

.buttons-container a img {
  width: 4rem;
  margin-right: 2rem;
}

}

@media (min-width: 700px) {
  #page-landing-content {
    max-width: 1000px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "logo hero hero" "buttons buttons total";
  }

  .logo-container {
    grid-area: logo;
    text-align: left;
    align-self: center;
    margin: 0;
  }

  .logo-container h2 {
    text-align: initial;
    font-size: 3.6rem;
  }

  .logo-container img {
    height: 100%;
  }


  .hero-image {
    grid-area: hero;
    justify-self: end;
    width: 100%;
    margin-left: 0;
  }

  .buttons-container {
    grid-area: buttons;
    justify-content: flex-start;
  }

  .buttons-container a {
    font-size: 2.4rem;
  }


.buttons-container a {
  width: 20rem;
}

  .total-connections {
    grid-area: total;
    justify-self: end;
    width: 30rem;
  }
}

@media (min-width: 900px) {
  .buttons-container a {
  width: 30rem;
}
}
 `;
 

