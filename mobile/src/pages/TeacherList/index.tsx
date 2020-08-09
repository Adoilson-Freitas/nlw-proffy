import React, { useState, useEffect } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from'@expo/vector-icons'
import api from '../../services/api';
import { AsyncStorage } from 'react-native';

import { Container, ScrollView, ButtonSearch, InputGroup, Picker, SearchForm, TextInput, Label, InputBlock } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';



function TeacherList() {
    const [isFiltersVisible, seTisFiltersVisible] = useState();
    const [ teachers, setTeachers ] = useState([]);
    const [ week_day, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');
    const [ favorites, setFavorites ] = useState<number[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    }, [])
    
    function handleToggleFiltersVisible() {
        seTisFiltersVisible(!isFiltersVisible);
    }
    
    async function handleFiltersSubmit() {
        const response = await api.get('classes', {
            params: {
              week_day,
              time
            }
          });
         
          setTeachers(response.data);
    }



    return (
        <Container>
            <PageHeader title="Pesquisar professores são disponìveis." 
            headerRight={
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={25} color="#ff751a"/>
                </BorderlessButton>
            }>

           { isFiltersVisible && (
                <SearchForm>
                   <InputGroup>
                   <InputBlock>
                        <Label>Dia da Semana</Label>           
                         <Picker
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
                       
                    </InputBlock>

                  

                    <InputBlock>
                        <Label>Horário</Label>
                        <TextInput
                        value={time}
                        onChangeText={text => setTime(text)}
                        placeholder="Qual horário?"
                        placeholderTextColor="#c1bccc"
                        />
                    </InputBlock>
                   
                   </InputGroup>
                   <ButtonSearch onPress={handleFiltersSubmit} activeOpacity={0.8}>
                        <Feather name="search" size={24} color="#fff" />
                    </ButtonSearch>
                </SearchForm>
                
           )} 
            </PageHeader>
        

            <ScrollView
                contentContainerStyle={{
                   paddingHorizontal: 16,
                   paddingBottom: 126,
                }}
            >

                {teachers.map((teacher: Teacher) => {
                    return  (
                        <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
               
            </ScrollView>
            
        </Container>
    );
}

export default TeacherList;