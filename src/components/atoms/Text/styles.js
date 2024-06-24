import styled from "styled-components/native";

const CustomText = styled.Text`
	color: ${({ theme }) => theme.colors.DARK};
	font-size: ${({ theme }) => theme.metrics.px(24)}px;
	margin-top: ${({ theme }) => theme.metrics.px(12)}px;
	font-family: "Poppins_600SemiBold";
`;

export { CustomText };
