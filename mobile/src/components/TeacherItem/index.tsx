import React from 'react';
import { Linking } from 'react-native';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import WhatsappIcon from '../../assets/images/icons/whatsapp.png'

import { 
  Container, 
  Profile, 
  Avatar, 
  ProfileInfo, 
  Name, 
  Prof,
  Bio, 
  Footer,
  Price,
  Strong,
  ButtonContainer,
  FavoriteButton,
  Image,
  ContactButton,
  WhatsappText,
  UnFavoriteButton,
} from './styles';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: number;
}

export interface TeacherItemProps {
  teacher: Teacher;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher })  =>{

  function handleLinkWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }}/>
     

      <ProfileInfo>
        <Name>{teacher.name}</Name>
        <Prof>Professor(a) de Inglês</Prof>
      </ProfileInfo>
     
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'  '}
        <Strong>R$ {teacher.cost}</Strong>
        </Price>

        <ButtonContainer>
        <FavoriteButton activeOpacity={0.8}>
            {/* <Image source={heartOutLineIcon}/> */}
            <UnFavoriteButton activeOpacity={0.8}>

            <Image source={unFavoriteIcon}/>
            </UnFavoriteButton>

        </FavoriteButton>

        <ContactButton activeOpacity={0.8} onPress={handleLinkWhatsapp}>
            <Image source={WhatsappIcon}/>
            <WhatsappText>Entrar em contato</WhatsappText>
        </ContactButton>

      </ButtonContainer>
      </Footer>

    
    </Container>
  )
 }
export default TeacherItem;