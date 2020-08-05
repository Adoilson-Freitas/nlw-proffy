import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { FormPage, Main } from './styles'
import Input from '../../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

 
export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItems() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  return (
    <FormPage className="header-content">
      <PageHeader
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é prencher esse formulário de inscrição"  
      />

      <Main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo"/>
          <Input  name="avatar" label="Avatar"/>
          <Input name="whatsApp" label="WhatsApp"/>
          <Textarea name="bio" label="Biografia"/>

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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
          <Input  name="const" label="Custo da sua aula"/>

        </fieldset>

        <fieldset>
          <legend>
            Horário disponíveis
            <button type="button" onClick={addNewScheduleItems}>
              + Novo horário
            </button>
          </legend>

       {scheduleItems.map(scheduleItem => {
          return (
            <div key={scheduleItem.week_day} className="schedule-item">
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
            <Input  name="from" label="Das"type="time" />
            <Input  name="to" label="Até" type="time" />
            </div>
          );
       })}
        </fieldset>


        <footer>
         <p>
         <img src={WarningIcon} alt="Aviso Impontante"/>
          Importante! <br/>
          Preencha todos os dados
         </p>
         <button type="button">
           Salvar cadastro
         </button>
        </footer>
      </Main>
    </FormPage>
  )
}