import styled from 'styled-components/native';

export const Container = styled.View`
     justify-content: center;
    background-color: #f7f7f7;
`;

  export const Main = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  `;

export const Description = styled.Text`
   max-width: 250px;
   color: #fff;
   margin-top: -75px;
   font-family: Poppins_400Regular;
   font-size: 12px;
   line-height: 20px;
   margin-left: 20px;
`;

export const TextWarning = styled.Text`
   color: #888;
   font-family: Poppins_400Regular;
   font-size: 12px;
   line-height: 20px;
   margin-left: 20px;
`;

export const ButtonEnv = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 0 40px;
  height: 58px;
  background-color: #1aa3ff;
  border-radius: 8px;

`;
export const Fieldset = styled.View`
     border: 0;
     padding: 0 14px;
`;

export const Legend = styled.Text`
    color: #333;
    margin-bottom: 14px;
    margin-top: 8px;
    width: 100%;
    padding-bottom: 16px;
    font-size: 16px;
`;

export const Label = styled.Text`
   font-family: Poppins_400Regular;
   color: #d4c2ff;
   font-size: 12px;

`;

export const Input = styled.TextInput`
     width: 100%;
     height: 54px;
    border-radius: 8px;
    justify-content: center;
    padding: 0 16px;
    margin: 4px 0 16px 0;
    border-width: 1px;
    border-color: #aaaaaadf;
    background-color: #f8f8f8;
`;

export const InputBlock = styled.View`
    width: 48%;
`;

export const Textarea = styled.TextInput`
    width: 100%;
     height: 70px;
     border-radius: 8px;
     border-width: 1px;
    border-color: #aaaaaadf;
    background-color: #f8f8f8;
    justify-content: center;
    padding: 0 16px;
    margin: 4px 0 16px 0;
`;

export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


