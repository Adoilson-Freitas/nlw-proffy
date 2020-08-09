import React, { useEffect, useState } from 'react';
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
  TextConnections,
  ImageLogo
} from './styles'; 

import landingImg from '../../assets/images/lesson2.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import { AntDesign } from '@expo/vector-icons'; 
import api from '../../services/api';


function Landing (){
  const { navigate } = useNavigation();
  const [ totalConnections, setTotalConnections ] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total)
    });
      
    }, []);


  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <ImageLogo source={landingImg}/> 

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
      Total de {totalConnections} conexões já realizadas {' '} 
      <AntDesign name="heart" size={14} color="#ff751a" />
    </TextConnections>


    </Container>
  );
}

export default Landing;