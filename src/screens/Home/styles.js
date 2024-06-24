import styled from "styled-components/native";
// import { Feather } from "@expo/vector-icons";

/* HEADER */

const Content = styled.View`
	flex: 1;
	align-items: flex-start;
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

const Username = styled.Text`
	font-size: 18px;
	color: #fff;
	font-weight: bold;
`;

export { ButtonUser, Content, Username };
