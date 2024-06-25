import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
	display: flex;
	flex-shrink: 0;
	width: ${theme.metrics.px(340)}px;
	height: ${theme.metrics.px(22)}px;
	margin-right: ${theme.metrics.px(15)}px;
	margin-top: ${theme.metrics.px(15)}px;
`;

export const BoxIconShare = styled.View`
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0px;
	width: ${theme.metrics.px(20)}px;
	height: ${theme.metrics.px(20)}px;
`;

export const ShareIcon = styled(Icon).attrs({
	name: "ios-share",
})`
	color: ${theme.colors.BRANCO};
	font-size: ${theme.metrics.px(20)}px;
`;
