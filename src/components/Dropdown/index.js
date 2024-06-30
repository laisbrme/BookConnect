import React, { useState } from "react";
import MultiSelect from "react-native-multiple-select";
import { Container, MultiSelectContainer } from "./styles";
import { theme } from "../../styles/theme";

const items = [
	{
		id: "1",
		name: "Lidos",
	},
	{
		id: "2",
		name: "Lendo",
	},
	{
		id: "3",
		name: "Favoritos",
	},
];

const Dropdown = () => {
	const [selectedItems, serSelectedItems] = useState([]);

	onSelectedItemsChange = (selectedItems) => {
		serSelectedItems(selectedItems);
		// console.warn('Selected Items: ', selectedItems)
	};

	return (
		<Container>
			<MultiSelectContainer>
				<MultiSelect
					items={items}
					uniqueKey="id"
					onSelectedItemsChange={onSelectedItemsChange}
					selectedItems={selectedItems}
					selectText="Filtrar"
					searchInputPlaceholderText="Pesquisar itens..."
					onChangeInput={(text) => console.warn(text)}
					tagRemoveIconColor={theme.colors.BRANCO}
					tagBorderColor={theme.colors.BRANCO}
					tagTextColor={theme.colors.BRANCO}
					selectedItemTextColor={theme.colors.PRETO}
					selectedItemIconColor={theme.colors.PRETO}
					itemTextColor="#000"
					displayKey="name"
					searchInputStyle={{ color: theme.colors.PRETO }}
					submitButtonColor={theme.colors.ROXO}
					submitButtonText="Aplicar"
					removeSelected
				/>
			</MultiSelectContainer>
		</Container>
	);
};

export default Dropdown;
