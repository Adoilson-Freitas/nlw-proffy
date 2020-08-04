import React from 'react';
import { Main } from './styles'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
 
export default function TeacherList() {
  return (
      <Main>
        <article>
         <header>
            <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
            <div>
              <strong>Diego Fernandes</strong>
              <span>Química</span>
            </div>
         </header>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis quam, eu auctor lorem. Etiam vehicula ultricies ero
             <br/> <br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis quam, eu auctor lorem. Etiam vehicula ultricies ero
         </p>

         <footer>
          <p>
            preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            <p>Entrar em contato</p>
          </button>
         </footer>
        </article>
      </Main>
  )
}