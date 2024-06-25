import styled from "styled-components/native";
import { theme } from "../../styles/theme";

const LayoutText = styled.View`
	display: flex;
	width: ${theme.metrics.px(250)}px;
	height: ${theme.metrics.px(45)}px;
	margin-right: ${theme.metrics.px(105)}px;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
	line-height: 109%;
`;

const ListCards = styled.View`
	flex-wrap: wrap;
`;

export { LayoutText, ListCards };
