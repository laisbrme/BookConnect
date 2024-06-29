import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TextField = styled.View`
    padding-left:40px;
    padding-right: 40px;
    padding-bottom: 40px;
`
const Text = styled.Text`
    text-align: center;
    font-size: ${(props) => props.fontSize || theme.metrics.px(18)}px;
	color: ${(props) => props.cor || theme.colors.TEXTO_ESCURO};
	font-family: ${(props) => props.fontFamily || theme.fonts.regular};
	line-height: 150%;
`

const FormField = styled.View`
    background-color: #FFF;
    border-radius: 22px;
    width: 90%;
    height: 100%;
    padding: 30px;
`

export { TextField, Text, FormField};