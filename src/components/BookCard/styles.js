import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../styles/theme";
import { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
	width: ${theme.metrics.px(162)}px;
	height: ${theme.metrics.px(237)}px;
	margin-top: ${theme.metrics.px(25)}px;
	border-radius: ${theme.metrics.px(8)}px;
    border: ${theme.metrics.px(0.5)}px solid ${theme.colors.CINZA};
	overflow: hidden;
`;

export const MaskGroup = styled.View`
	width: 100%;
	height: ${theme.metrics.px(162)}px;
`;

export const BookCover = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

export const TextGroup = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
	height: ${theme.metrics.px(74)}px;
	padding: ${theme.metrics.px(10)}px;
	background-color: ${theme.colors.LIGHT};
`;

export const TextBox = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${theme.metrics.px(114)}px;
	height: ${theme.metrics.px(54)}px;
`;

export const BoxIcon = styled.View`
	width: ${theme.metrics.px(18)}px;
	height: ${theme.metrics.px(18)}px;
`;

export const HeartIcon = styled(Icon).attrs({
	name: "cards-heart",
})`
	color: ${(item) => item.cor ? theme.colors.ROXO : theme.colors.CINZA};
	font-size: ${theme.metrics.px(18)}px;
`;

