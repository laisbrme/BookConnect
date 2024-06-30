import React from "react";
import { SafeAreaView, Text } from "react-native";

import { InputWithIcon } from "./styles";

const MyInput = (props) => {
	return (
		<SafeAreaView>
			<Text>{props.label}</Text>
			<InputWithIcon
				iconName={props.iconName}
				placeholder={props.placeHolder}
				secureTextEntry={props.comMascara}
			/>
		</SafeAreaView>
	);
};

export default MyInput;
