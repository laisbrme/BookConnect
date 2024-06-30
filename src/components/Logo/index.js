import React from "react";
import { LogoContainer, LogoImg } from "./styles";

export const Logo = ({ item }) => {
	return (
		<LogoContainer>
			<LogoImg source={require("../../../assets/icon.png")} />
		</LogoContainer>
	);
};
