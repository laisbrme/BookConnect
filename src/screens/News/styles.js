import styled from "styled-components/native";
import { colors } from "../../styles/colors";

const ContainerNews = styled.View`
	display: flex;
	flex-direction: column;
	margin-top: 11%;
	width: 80%;
`;

const LayoutText = styled.Text`
	width: 60%;
`;

const ListCards = styled.View`
	flex-wrap: wrap;
`;

export { ContainerNews, LayoutText, ListCards };
