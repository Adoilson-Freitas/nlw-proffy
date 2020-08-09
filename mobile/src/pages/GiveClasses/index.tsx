import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import {
    Container, 
    Description, 
    Fieldset, 
    Main, 
    Input, 
    Legend, 
    Textarea, 
    Label, 
    InputGroup, 
    InputBlock,
    ButtonEnv,
    TextWarning
    
} from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from 'react-native';
import { Footer } from '../../components/TeacherItem/styles';
import { AntDesign } from '@expo/vector-icons'; 
import { TextButton } from '../Landing/styles';
function GiveClasses() {
    const [ week_day, setWeekDay ] = useState('');

    return (
        <Container>
            <PageHeader title="Quer ser um professor?!"/>
       
            <Description>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
            </Description>

            <ScrollView
                contentContainerStyle={{
                   paddingHorizontal: 16,
                   paddingBottom: 126,
                }}
            >
            <Main>
             <Fieldset>
          <Legend>Seus dados</Legend>
          <Label>Nome completo</Label>  
            <Input 
       //       label="Nome completo"
        //     value={name}
          //    onChange={(e) => { setName(e.target.value)}}
            />
            <Label>avatar</Label>  
            <Input 
       //       name="avatar" 
       //       label="Avatar"
       //       value={avatar}
       //       onChange={(e) => { setAvatar(e.target.value)}}
            />
            <Label>WhatsApp</Label>  
            <Input 
          //    name="whatsApp" 
      //        label="WhatsApp"
       //       value={whatsapp}
       //       onChange={(e) => { setWhatsapp(e.target.value)}}
            />
            <Label>Biografia</Label>  
            <Textarea 
                multiline = {true}
                numberOfLines = {4}
           //     label="Biografia"
       //       value={bio}
         //     onChange={(e) => { setBio(e.target.value)}}
            />

       
            </Fieldset>

            <Fieldset>
        <Legend>Sobre a aula</Legend>
        <Label>Custo da sua aula</Label>  
            <Input 
          //    name="whatsApp" 
      //        label="WhatsApp"
       //       value={whatsapp}
       //       onChange={(e) => { setWhatsapp(e.target.value)}}
            />

        </Fieldset>

        <Fieldset>
        <Legend>Horário disponíveis</Legend>

        <Label>Dia da Semana</Label>           
                         <Picker
                         style={{color: "#999", backgroundColor: "#fff"}}
                        selectedValue={week_day}
                        onValueChange={(itemValue, itemIndex) => setWeekDay(itemValue)}
                    >
                         <Picker.Item label="Qual o dia?" value="" />
                        <Picker.Item label="domingo" value="0" />
                        <Picker.Item label="segunda-feira" value="1" />
                        <Picker.Item label="terça-feira	" value="2" />
                        <Picker.Item label="quarta-feira" value="3" />
                        <Picker.Item label="quinta-feira" value="4" />
                        <Picker.Item label="sexta-feira" value="5" />
                        <Picker.Item label="sábado" value="6" />
                    </Picker>
                    <InputGroup>
                    <InputBlock>
            <Label>Das</Label>  
                    <Input 
          //    name="whatsApp" 
      //        label="WhatsApp"
       //       value={whatsapp}
       //       onChange={(e) => { setWhatsapp(e.target.value)}}
            />
            </InputBlock>
            <InputBlock>
 <Label>Atè</Label>  
        <Input
          //    name="whatsApp" 
      //        label="WhatsApp"
       //       value={whatsapp}
       //       onChange={(e) => { setWhatsapp(e.target.value)}}
            />
            </InputBlock>
                    </InputGroup>
         
        </Fieldset>

        <Footer>
          <TextWarning>
          <AntDesign name="warning" size={24} color="red" />
          {'  '} Importante! {'\n'}
            Preencha todos os dados
          </TextWarning>
          <ButtonEnv>
            <TextButton>
            Salvar cadastro
            </TextButton>
          </ButtonEnv>
          </Footer>
            </Main>
            </ScrollView>
        </Container>
    );
}

export default GiveClasses;