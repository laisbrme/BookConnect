import styled from "styled-components/native";
import { theme } from "../../styles/theme";

const LayoutText = styled.View`
	display: flex;
	width: ${theme.metrics.px(210)}px;
	height: ${theme.metrics.px(45)}px;
	margin-right: ${theme.metrics.px(145)}px;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	line-height: 109%;
`;

const ListCards = styled.View`
	width: 90%;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export { LayoutText, ListCards };
