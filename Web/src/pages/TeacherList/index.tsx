import React from 'react';
import PageHeader from '../../components/PageHeader';
import { TeacherPage, Form } from './styles'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function TeacherList() {
  return (
    <TeacherPage>
      <PageHeader title="Estes são os proffys disponìveis.">
        <Form>
        <Select 
            name="subject" 
            label="Matéria"
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
          <Input type="time" name="time" label="Hora"/>

        </Form>
      </PageHeader>

      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />


    </TeacherPage>
  )
}