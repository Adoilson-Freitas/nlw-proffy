import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    background-color: #f5f5f5;
`;

export const ScrollView = styled.ScrollView`
    margin-top: -40px;
`;


export const SearchForm = styled.View`
    margin-bottom: 8px;
`;

export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Label = styled.Text`
   font-family: Poppins_400Regular;
   color: #d4c2ff;
`;


export const InputBlock = styled.View`
    width: 48%;
`;

export const TextInput = styled.TextInput`
    height: 54px;
    background-color: #fff;
    border-radius: 8px;
    justify-content: center;
    padding: 0 16px;
    margin: 4px 0 16px 0;
`;

export const Picker = styled.Picker`
    height: 54px;
    background-color: #fff;
    border-radius: 8px;
    justify-content: center;
    padding: 0 16px;
    margin: 4px 0 16px 0;
    border-width: 3px;
    border-color: #1aa3ff;
    overflow: hidden;
`;

export const ButtonSearch = styled.TouchableOpacity`
   background-color: #1aa3ff;
   height: 56px;
   border-radius: 8px;
   justify-content: center;
   align-items: center;
`;