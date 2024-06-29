import React from "react";
import { MeuText } from "../../styles/styles-geral";
import { Background1 } from "../../components/Backgrounds";

export default function Comments({ navigation }) {
	return (
		<Background1>
			<MeuText fontSize={25} cor={"white"}>
				Em construção
			</MeuText>
		</Background1>
	);
}
