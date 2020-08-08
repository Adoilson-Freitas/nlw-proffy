import React from 'react';
import { Main } from './styles'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

 const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
   function createNewConnection() {
     api.post('connections', {
       user_id: teacher.id,
     })
   }
  return (
      <Main>
        <article>
         <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
            <strong>{teacher.name}</strong>
              <span>Professor(a) de inglês</span>
            </div>
         </header>
        <p>{teacher.bio}</p>

         <footer>
          <p>
            preço/hora
            <strong>R${teacher.cost}</strong>
          </p>

          <a target="_blank" rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="whatsapp"/>
            <p>Entrar em contato</p>
          </a>
         </footer>
        </article>
      </Main>
  )
}

export default TeacherItem;