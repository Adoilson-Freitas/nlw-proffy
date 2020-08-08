import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

:root {
  --color-background: #f7f7f7;
  --color-primary-lighter: #ff751a;
  --color-primary-light: #e65c00;
  --color-primary: #0040ff;
  --color-primary-dark: #774dd6;
  --color-primary-darker: #6842c2;
  --color-secondary: #1aa3ff;
  --color-secondary-dark: #008ae6;
  --color-title-in-primary: #ffffff;
  --color-text-in-primary: #ffffff;
  --color-text-title: #32264d;
  --color-text-complement: #9c98a6;
  --color-text-base: #6a6180;
  --color-line-in-white: #e6e6f0;
  --color-input-background: #d6d6dc;
  --color-button-text: #ffffff;
  --color-box-base: #ffffff;
  --color-box-footer: #fafafc;

  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100vh;
  background: var(--color-background);
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font-family: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

.container {
  width: 90vw;
  max-width: 700px;
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}

`;