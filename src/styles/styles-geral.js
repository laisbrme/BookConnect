import styled from "styled-components/native";
import { CORES } from "../constants/cores";
import { useFonts, Poppins_100Thin, Poppins_600SemiBold } from "@expo-google-fonts/poppins"

const Container = styled.View`
    flex: 1;
    background-color: '#FFFF';
    align-items: center;
    justify-content: center;
    padding: 20px;
`;
const MeuText = styled.Text`
    font-size: ${props => props.fontSize || 16};
    color: ${props => props.cor || '#1a1a1a'};
`;

export {
    Container,
    MeuText
};
