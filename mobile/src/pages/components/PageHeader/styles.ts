import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px;
  background-color: #0040ff;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.Image`
  resize-mode: contain;
`;

export const Title = styled.Text`
    font-family: Archivo_700Bold;
    color: #FFF;
    font-size: 24;
    line-height: 32;
    max-width: 160;
    margin: 0 40px;
`;

