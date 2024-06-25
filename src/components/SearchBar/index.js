import React from "react";
import { Container, BoxIconSearch, SearchIcon, Input } from "./styles";

export default function SearchBar(props) {
	return (
		<Container>
			<Input />
			<BoxIconSearch>
				<SearchIcon />
			</BoxIconSearch>
		</Container>
	);
}
