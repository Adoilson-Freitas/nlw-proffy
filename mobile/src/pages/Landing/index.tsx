import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Container, 
  Image, 
  Text, 
  Strong, 
  TextButton,
  ButtonContainer, 
  BottonStudy,
  BottonClass,
  TextConnections
} from './styles'; 

import landingImg from '../../assets/images/lesson2.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import { AntDesign } from '@expo/vector-icons'; 


function Landing (){
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <Image source={landingImg}/> 

  <Text>Seja bem-vindo, {'\n'}
    <Strong>O que deseja fazer?</Strong>
  </Text>

    <ButtonContainer>

      <BottonStudy activeOpacity={0.8} onPress={handleNavigateToStudyPages} >
        <Image source={studyIcon}/>
        <TextButton>Estudar</TextButton>
      </BottonStudy>

      <BottonClass activeOpacity={0.8} onPress={handleNavigateToGiveClassesPage}>
        <Image source={giveClassIcon}/>
        <TextButton>Dar aulas</TextButton>
      </BottonClass>

    </ButtonContainer>


    <TextConnections>
      Total de 285 conexões já realizadas {' '} 
      <AntDesign name="heart" size={14} color="#ff751a" />
    </TextConnections>


    </Container>
  );
}

export default Landing;