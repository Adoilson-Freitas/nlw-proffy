import React, { useState } from 'react';

import { Container, ScrollView } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites() {
    const [ teachers, setTeachers ] = useState([]);

    return (
        <Container>
            <PageHeader title="Meus Teachers Favoritos!"/>
       
       
            <ScrollView
                contentContainerStyle={{
                   paddingHorizontal: 16,
                   paddingBottom: 126,
                }}
            >
               {teachers.map((teacher: Teacher) => {
                    return  <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </ScrollView>
            
        </Container>
    );
}

export default Favorites; 