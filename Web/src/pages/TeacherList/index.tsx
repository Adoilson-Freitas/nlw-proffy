import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import { TeacherPage, Form } from './styles'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';


export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
   
    setTeachers(response.data);
  }
 

  return (
    <TeacherPage>
      <PageHeader title="Estes são os proffys disponìveis.">
        <form onSubmit={searchTeacher}>
        <Form>
        <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Histtória', label: 'Histtória' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value)}}
            options={[
              { value: '0', label: 'domingo' },
              { value: '1', label: 'segunda-feira	' },
              { value: '2', label: 'terça-feira	' },
              { value: '3', label: 'quarta-feira' },
              { value: '4', label: 'quinta-feira' },
              { value: '5', label: 'sexta-feira' },
              { value: '6', label: 'sábado' },
            ]}
          />
         <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={(e) => { setTime(e.target.value)}}
          />

          <button type="submit"><FaSearch /></button>

        </Form>
        </form> 
      </PageHeader>

      {teachers.map((teacher: Teacher) => {
        return  <TeacherItem key={teacher.id} teacher={teacher} />
      })}


    </TeacherPage>
  )
}