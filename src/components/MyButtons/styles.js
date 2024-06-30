import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.TouchableOpacity`
    display: flex;
    width: 100%;
    height: ${theme.metrics.px(56)}px;
    border-radius: ${theme.metrics.px(8)}px;
    border: ${theme.metrics.px(2)}px solid ${theme.colors.ROXO};
	margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${(props) => props.bg || theme.colors.ROXO};
`;
