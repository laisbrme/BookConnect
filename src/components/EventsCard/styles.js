import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../styles/theme";
import { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
	width: ${theme.metrics.px(359)}px;
	height: ${theme.metrics.px(432)}px;
	margin-top: ${theme.metrics.px(35)}px;
	border-radius: ${theme.metrics.px(10)}px;
    border: ${theme.metrics.px(0.5)}px solid ${theme.colors.CINZA};
	overflow: hidden;
`;

export const MaskGroup = styled.View`
	width: 100%;
	height: ${theme.metrics.px(367)}px;
`;

export const EventPicture = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

export const LikeBar = styled.View`
	display: flex;
	flex-direction: row;
  	justify-content: flex-end;
	width: 100%;
	height: ${theme.metrics.px(117)}px;
	padding: ${theme.metrics.px(20)}px;
	background-color: ${theme.colors.LIGHT};
	
`;

export const LikeIcon = styled(Icon).attrs({
	name: "thumb-up",
})`
	color: ${(item) => item.cor ? theme.colors.ROXO : theme.colors.CINZA};
	font-size: ${theme.metrics.px(20)}px;
`;






