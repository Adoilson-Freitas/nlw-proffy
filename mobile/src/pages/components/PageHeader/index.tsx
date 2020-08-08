import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../../assets/images/icons/back.png'
import logoImg from '../../../assets/images/logo.png'

import { Container, TopBar, Image, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} />
        </BorderlessButton>

        <Image source={logoImg} />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
}

export default PageHeader;