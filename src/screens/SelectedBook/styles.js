import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconChat from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../styles/theme";

export const MaskGroup = styled.View`
	display: flex;
	width: 100%;
	height: ${theme.metrics.px(287)}px;
`;

export const BookCover = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

export const InterationGroup = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: ${theme.metrics.px(263)}px;
	background-color: ${theme.colors.ROXO};
	border-bottom-left-radius: ${theme.metrics.px(16)}px;
	border-bottom-right-radius: ${theme.metrics.px(16)}px;
`;

export const TextBox = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: ${theme.metrics.px(349)}px;
	height: ${theme.metrics.px(159)}px;
	line-height: 160%;
	margin-top: ${theme.metrics.px(33)}px;
`;

export const InteractiveBox = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: ${theme.metrics.px(349)}px;
	height: ${theme.metrics.px(24)}px;
	margin-bottom: ${theme.metrics.px(33)}px;
`;

export const BoxIconsText = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: ${theme.metrics.px(110)}px;
	height: ${theme.metrics.px(24)}px;
`;

export const InteractiveTextBox = styled.Text`
	display: flex;
	width: 69px;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: absolute;
	right: 0px;
    line-height: 90%;
`;

export const BoxIcons = styled.View`
	display: flex;
	width: ${theme.metrics.px(24)}px;
	height: ${theme.metrics.px(24)}px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: absolute;
	left: 0px;
`;

export const BookmarkIcon = styled(Icon).attrs({
	name: "bookmark-outline",
})`
	color: ${theme.colors.BRANCO};
	font-size: ${theme.metrics.px(22)}px;
`;

export const HeartIcon = styled(Icon).attrs({
	name: "cards-heart-outline",
})`
	color: ${theme.colors.BRANCO};
	font-size: ${theme.metrics.px(22)}px;
`;

export const ChatIcon = styled(IconChat).attrs({
	name: "chat-bubble-outline",
})`
	color: ${theme.colors.BRANCO};
	font-size: ${theme.metrics.px(22)}px;
`;

export const ButtonView = styled.TouchableOpacity`
    display: flex;
    width: ${theme.metrics.px(343)}px;
    height: ${theme.metrics.px(42)}px;
    margin-top: ${theme.metrics.px(24)}px;
    margin-left: ${theme.metrics.px(43)}px;
    border-radius: ${theme.metrics.px(4)}px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${theme.colors.ROXO};
`;

export const ListChapters = styled.View`
    display: flex;
	flex-direction: column;
    width: ${theme.metrics.px(343)}px;
    height: auto;
    margin-top: ${theme.metrics.px(14)}px;
    margin-left: ${theme.metrics.px(43)}px;
    flex-shrink: 0;
`;

export const TitleChapter = styled.View`
	display: flex;
    justify-content: space-between;
	width: 100%;
	height: auto;
    padding-top: ${theme.metrics.px(10)}px;
    padding-bottom: ${theme.metrics.px(5)}px;
`;

export const ChapterView = styled.View`
    display: flex;
    width: 100%;
    height: ${theme.metrics.px(42)}px;
    margin-top: ${theme.metrics.px(5)}px;
    padding-left: ${theme.metrics.px(14)}px;
    padding: ${theme.metrics.px(14)}px;
    border-radius: ${theme.metrics.px(4)}px;
    border: ${theme.metrics.px(0.5)}px solid ${theme.colors.CINZA};
    justify-content: space-around;
    flex-shrink: 0;
    background-color: lightgray;
`;

export const TextChapter = styled.View`
	display: flex;
    justify-content: flex-start;
	width: ${theme.metrics.px(291)}px;
	height: ${theme.metrics.px(20)}px;
`;

export const CheckIcon = styled(IconChat).attrs({
	name: "check-circle-outline",
})`
	color: ${theme.colors.ROXO};
	font-size: ${theme.metrics.px(24)}px;
`;

export const BoxCheckIcon = styled.TouchableOpacity`
	display: flex;
	width: ${theme.metrics.px(42)}px;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: absolute;
	right: 0px;
`;
