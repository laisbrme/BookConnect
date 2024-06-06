import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CORES } from "../../constants/cores";

const MyButton = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.callback}>
			<Text style={styles.text}>{props.value}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: CORES.COR_PRIMARIA,
		padding: 16,
		width: 311,
		borderRadius: 8,
		marginTop: 20,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
	},
});

export default MyButton;
