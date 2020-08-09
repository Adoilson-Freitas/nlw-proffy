import React, { useState } from 'react';
import { Linking, AsyncStorage } from 'react-native';

import WhatsappIcon from '../../assets/images/icons/whatsapp.png'
import { Ionicons } from'@expo/vector-icons'

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
} from './styles';
import api from '../../services/api';

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
  favorited: boolean;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited })  =>{
  const [ isFavorited, setIsFavorited ] = useState(favorited);

  function handleLinkWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
     });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }


  async function handleToggleFavorited() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
        favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
        const favoritesIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
            return teacherItem.id === teacher.id;
        });

        favoritesArray.splice(favoritesIndex, 1);
        setIsFavorited(false);
    } else {
        favoritesArray.push(teacher);
        setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
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
        <FavoriteButton
         activeOpacity={0.6}
         onPress={handleToggleFavorited}
         >

            {isFavorited
            ? <Ionicons name="md-heart-dislike" size={45} color="#ff751a"/>
            : <Ionicons name="md-heart" size={45} color="#0040ff"/>

                        }
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