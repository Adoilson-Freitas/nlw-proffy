import React, { useState } from 'react';

import { Container, ScrollView } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    const [ teachers, setTeachers ] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setTeachers(favoritedTeachers);
            }
        });
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );
    return (
        <Container>
            <PageHeader title="Meus professores Favoritos!"/>
       
       
            <ScrollView
                contentContainerStyle={{
                   paddingHorizontal: 16,
                   paddingBottom: 126,
                }}
            >
               {teachers.map((teacher: Teacher) => {
                    return  <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited
                    />
                })}
            </ScrollView>
            
        </Container>
    );
}

export default Favorites; 