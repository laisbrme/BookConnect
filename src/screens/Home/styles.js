import styled from "styled-components/native";
import { theme } from "../../styles/theme";

// import { Feather } from "@expo/vector-icons";

/* HEADER */

const Content = styled.View`
	display: flex;
	align-content: flex-start;
	flex-direction: column;
`;

const ButtonUser = styled.TouchableOpacity`
	padding-top: 25px;
	width: 44px;
	height: 44px;
	background-color: #f8f8f8;
	justify-content: center;
	align-items: center;
	border-radius: 22px;
	padding: 10px;
`;

const Username = styled.View`
	padding-top: 20px;
`;

/* CARD */

const ListCards = styled.View`
	width: 90%;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export { ButtonUser, Content, Username, ListCards };
