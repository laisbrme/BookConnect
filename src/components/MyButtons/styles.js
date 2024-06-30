import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.TouchableOpacity`
    display: flex;
    background-color: ${theme.colors.ROXO};
    width: 100%;
    border-radius: ${theme.metrics.px(8)}px;
    margin-top: 20px;
    align-items: center;
	border-width: 1px;
	border-color: #ccc;
	padding: 10px;
`;
