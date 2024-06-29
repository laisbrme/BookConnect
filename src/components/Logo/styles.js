import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../styles/theme";
import { css } from "styled-components/native";


export const LogoContainer = styled.View`
	width: 100%;
	height: ${theme.metrics.px(100)}px;
	display: flex;
	align-items: center;
	margin-bottom: ${theme.metrics.px(50)}px;
`;

export const LogoImg = styled.Image`
	width: ${theme.metrics.px(94)}px;
	height: ${theme.metrics.px(124)}px;
`;

