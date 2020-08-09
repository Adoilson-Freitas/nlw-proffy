import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #0040ff;
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const Image = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const ImageLogo = styled.Image`
  width: 100%;
  top: -480px;
  resize-mode: contain;
  position: absolute;
  left: 30px;

`;

export const Text = styled.Text`
font-family: Poppins_400Regular;
 color: #fff;
 font-size: 20px; 
 line-height: 30px;
 margin-top: 260px;
`;


export const Strong = styled.Text`
 font-family: Poppins_600SemiBold;

`;

export const ButtonContainer = styled.View`
 flex-direction: row;
 margin-top: 40px;
 justify-content: space-between;

`;

export const BottonStudy = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  background-color: #ff751a;
 
`;

export const BottonClass = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  background-color: #1aa3ff;

`;

export const TextButton = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
  text-align: center;
`;


export const TextConnections = styled.Text`
 max-width: 140px;
 font-family: Poppins_400Regular;
 font-size: 12px;
 color: #ddd;
 line-height: 20px;
 margin-top: 40px;
`;

