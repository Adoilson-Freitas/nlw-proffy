import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #000020;
  font-family: Archivo_700Bold;
  font-size: 20px;
`;

export const Prof = styled.Text`
  color: #6a6180;
  font-family: Poppins_400Regular;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  color: #6a6180;
  font-family: Poppins_400Regular;
  font-size: 14px;
  margin: 0 24px;
  line-height: 24px;
`;



export const Footer = styled.View`
   background-color: #fafafc;
    padding: 24px;
    align-items: center;
    margin-top: 34px;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;
`;

export const Strong = styled.Text`
  color: #000020;
  font-family: Archivo_700Bold;
  font-size: 16px;
`;

export const ButtonContainer = styled.View`
 flex-direction: row;
 margin-top: 16px;
`;



export const FavoriteButton = styled.TouchableOpacity`
   background-color: #f7f7fd;
   width: 56px;
   height: 56px;
   border-radius: 8px;
   justify-content: center;
   align-items: center;
   margin-right: 8px;
`;



export const ContactButton = styled.TouchableOpacity`
   background-color: #1aa3ff;
   flex: 1;
   height: 56px;
   border-radius: 8px;
   justify-content: center;
   align-items: center;
   margin-right: 8px;
   flex-direction: row;
`;

export const Image = styled.Image`
 
`;

export const WhatsappText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
