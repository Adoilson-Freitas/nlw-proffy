import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/learn.png'

import { Container,Description, TopBar, Image, Title, Header } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  description?: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, headerRight, description, title }) => {
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

      <Header>
      <Title>{title}</Title>
      
      {headerRight}
      </Header>
      {children}
    </Container>
  );
}

export default PageHeader;