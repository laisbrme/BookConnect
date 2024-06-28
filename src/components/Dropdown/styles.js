import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
	display: flex;
	width: ${theme.metrics.px(356)}px;
	margin-top: ${theme.metrics.px(20)}px;
	border-radius: ${theme.metrics.px(8)}px;
	overflow: hidden;
`;

export const MultiSelectContainer = styled.View`
	width: 100%;
`;
