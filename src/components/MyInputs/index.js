import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
import { CORES } from "../../constants/cores";

const MyInput = (props) => {
	return (
		<SafeAreaView>
			<Text>{props.label}</Text>
			<TextInput
				style={styles.input}
				placeholder={props.placeHolder}
				secureTextEntry={props.comMascara}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		width: 311,
		height: 52,
		borderColor: CORES.COR_PRIMARIA,
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 15,
		padding: 10,
		backgroundColor: "#fff",
	},
});

export default MyInput;
