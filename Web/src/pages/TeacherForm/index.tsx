import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { FormPage, Main } from './styles'
import Input from '../../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

 
export default function TeacherForm() {
 
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItems() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItems, index) => {
      if (index === position) {
        return { ...scheduleItems, [field]: value };
      }

      return scheduleItems;
    });

    setScheduleItems(updateScheduleItems)
  }

  function handleCreateClass(e: FormEvent) {
   e.preventDefault();

   api.post('classes', {
    name,
    avatar,
    whatsapp,
    bio,
    subject, 
    cost: Number(cost),
    schedule:scheduleItems,
   }).then(() => {
     history.push('/checked');
   }).catch(() => {
    alert('Erro do cadastro!')
   })

  }


  return (
    <FormPage className="header-content">
      <PageHeader
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é prencher esse formulário de inscrição"  
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              label="Nome completo"
              value={name}
              onChange={(e) => { setName(e.target.value)}}
            />
            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value)}}
            />
            <Input 
              name="whatsApp" 
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value)}}
            />
            <Textarea 
              name="bio" 
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value)}}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
                { value: 'História', label: 'Histtória' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input  
              name="const" 
              label="Custo da sua aula"
              value={cost}
              onChange={(e) => { setCost(e.target.value)}}
            />

          </fieldset>

          <fieldset>
          <legend>
            Horário disponíveis
            <button type="button" onClick={addNewScheduleItems}>
              + Novo horário
            </button>
          </legend>

       {scheduleItems.map((scheduleItem, index) => {
          return (
            <div key={scheduleItem.week_day} className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da semana"
              value={scheduleItem.week_day}
              onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
              name="from" 
              label="Das"
              type="time"
              value={scheduleItem.from}
              onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
            />

            <Input  
              name="to" 
              label="Até"
              type="time"
              value={scheduleItem.to}
              onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
            />
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
          <button type="submit">
            Salvar cadastro
          </button>
          </footer>
        </form>
      </Main>
    </FormPage>
  )
}