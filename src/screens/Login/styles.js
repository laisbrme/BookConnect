import styled from "styled-components/native";
import { theme } from "../../styles/theme";

const TextField = styled.View`
	padding-left: 40px;
	padding-right: 40px;
	padding-bottom: 40px;
`;

const Text = styled.Text`
	text-align: center;
	font-size: ${(props) => props.fontSize || theme.metrics.px(18)}px;
	color: ${(props) => props.cor || theme.colors.TEXTO_ESCURO};
	font-family: ${(props) => props.fontFamily || theme.fonts.regular};
	line-height: 150%;
`;

const FormField = styled.View`
	background-color: #fff;
	border-radius: ${theme.metrics.px(24)}px;
	border: ${theme.metrics.px(0.5)}px solid ${theme.colors.ROXO};
	width: 90%;
	height: auto;
	padding: ${theme.metrics.px(24)}px;
`;

const Link = styled.TouchableOpacity`
	width: 100%;
	height: ${theme.metrics.px(56)}px;
	align-items: center;
`;

const Powered = styled.Text`
	width: 100%;
	height: ${theme.metrics.px(56)}px;
	align-items: center;
`;

export { TextField, Text, FormField, Link, Powered };
