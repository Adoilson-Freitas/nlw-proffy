import React from 'react';
import PageHeader from '../../components/PageHeader';
import { TeacherPage, Form, Main } from './styles'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
 
export default function TeacherList() {
  return (
    <TeacherPage>
      <PageHeader title="Estes são os proffys disponìveis.">
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </Form>
      </PageHeader>

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
            Entrar em contato
          </button>
         </footer>
        </article>
      </Main>
    </TeacherPage>
  )
}