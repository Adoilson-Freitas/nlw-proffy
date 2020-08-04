import styled from 'styled-components';

export const Header = styled.div`
 display: flex;
 flex-direction: column;
 background: var(--color-primary);
 margin: 0 auto;

 .top-bar-container {
   widows: 90%;
   
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: var(--var-text-in-primary);
   padding: 1.6rem;
 }

 .top-bar-container a {
  height: 3.2rem;
  transition: opacity 0.2s;
 }

 .top-bar-container a:hover {
  opacity: 0.6;
 }


 .top-bar-container > img{
  height: 1.6rem;
 }

 .header-content {
   width: 90%;
   position: relative;
   margin: 3.2rem auto;
 }

 .header-content strong{
   font: 700 2.6rem Archivo;
   line-height: 3.2rem;
   color: var(--color-title-in-primary)
 }



  @media (min-width: 700px) {
   height: 340px;

  .top-bar-container {
    max-width: 1400px;
  }

  .header-content {
    flex: 1;
    line-height: 4.2rem;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 750px;

 }

 .header-content strong{
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    max-width: 350px;
 }
  }

`;

