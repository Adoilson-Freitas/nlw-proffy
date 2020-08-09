import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
     padding: 40px;
     background-color: #0040ff;
`;


export const Title = styled.Text`
  max-width: 180px;
  font-family: Archivo_700Bold;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
`;

export const Content = styled.ImageBackground`
  resize-mode: contain;
  flex: 1;
  justify-content: center;
`;

export const Description = styled.Text`
   margin-top: 24px;
   max-width: 240px;
   color: #fff;
   font-family: Poppins_400Regular;
   font-size: 16px;
   line-height: 26px;

`;


export const ButtonOk = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  height: 58px;
  background-color: #ff751a;
  border-radius: 8px;

`;
export const ButtonText = styled.Text`
    font-family: Archivo_700Bold;
    font-size: 16px;
    color: #fff;

`;

