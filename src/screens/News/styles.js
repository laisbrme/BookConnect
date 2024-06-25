import styled from "styled-components/native";
import { theme } from "../../styles/theme";

const LayoutText = styled.View`
	display: flex;
	width: ${theme.metrics.px(250)}px;
	margin-right: ${theme.metrics.px(105)}px;
	padding-bottom: ${theme.metrics.px(20)}px;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
`;

const ListCards = styled.View`
	flex-wrap: wrap;
`;

export { LayoutText, ListCards };
