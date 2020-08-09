import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px 20px;
  background-color: #0040ff;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.Image`
  resize-mode: contain;
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
    font-family: Archivo_700Bold;
    color: #FFF;
    font-size: 22px;
    line-height: 32px;
    max-width: 200px;
    margin: 40px 0;
`;


export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

