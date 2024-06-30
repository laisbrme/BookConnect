import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../styles/theme";


export const BoxTextInput = styled.View`
	width: ${theme.metrics.px(350)}px;
    height: ${theme.metrics.px(223)}px;
    padding: 10px;
    margin-left: 13px;
    border-radius: ${theme.metrics.px(4)}px;
    background-color: ${theme.colors.BRANCO};
`;
export const Box = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	width: ${theme.metrics.px(350)}px;
    height: ${theme.metrics.px(28)}px;
    margin-left: 13px;
    margin-top: 13px;
`;

export const BoxContent = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
	width: auto;
    height: 100%;
`;

export const BoxButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	width: 52%;
    height: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
    align-items: center;
	width: ${theme.metrics.px(86)}px;
    height: 100%;
    border-radius: 20px;
    border: ${theme.metrics.px(2)}px solid ${theme.colors.BRANCO};
    background-color: ${theme.colors.ROXO};
`;

export const PublishButton = styled.TouchableOpacity`
    align-items: center;
	width: ${theme.metrics.px(86)}px;
    height: 100%;
    border-radius: 20px;
    background-color: ${theme.colors.BRANCO};
`;


export const StarIcon = styled(Icon).attrs({
	name: "star",
})`
	color: ${theme.colors.CINZA};
	font-size: ${theme.metrics.px(24)}px;
`;
