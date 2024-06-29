import React from "react";
import { MeuText } from "../../styles/styles-geral";
import { Background2 } from "../../components/Backgrounds";

export default function UnderConstruction({ navigation }) {
	return (
		<Background2>
			<MeuText fontSize={25} cor={"white"}>
				Em construção
			</MeuText>
		</Background2>
	);
}
