import React from 'react';
import { useNavigation } from '@react-navigation/native';

import GiveClassesBgImages from '../../assets/images/give-classes-background.png';

import {Container, Title, Description, ButtonOk, ButtonText, Content } from './styles';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <Container>
            <Content
                resizeMode='contain'
                source={GiveClassesBgImages}
            >
                <Title>Quer ser um Teacher?</Title>
                <Description>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
            </Description>
            </Content>

            <ButtonOk activeOpacity={0.8} onPress={handleNavigateBack}>
                <ButtonText>Tudo bem</ButtonText>
            </ButtonOk>
        </Container>
    );
}

export default GiveClasses;