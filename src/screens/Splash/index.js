import React, { useEffect } from "react";
import { Container } from "./styles";

export default function Splash({ navigation }) {

	useEffect(() => {
		setTimeout(() => {
            navigation.navigate("Login");
        }, 3000); // 3 segundos de espera para a tela de splash aparecer. 
	},[navigation])

	return <Container source={require("../../../assets/splash.png")} />;
}
