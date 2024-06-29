import React from "react";
import {
    LogoContainer,
    LogoImg

} from "./styles";
import { theme } from "../../styles/theme";

export const Logo = ({ item }) => {
	return (
    <LogoContainer>
         <LogoImg source={require("../../../assets/icon.png")} />
    </LogoContainer>
  );
};