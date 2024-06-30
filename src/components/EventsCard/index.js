import React from "react";
import {
	Container,
	MaskGroup,
	EventPicture,
	LikeBar,
	LikeIcon,
} from "./styles";

export const EventsCard = ({ item }) => {
	return (
		<Container>
			<MaskGroup>
				<EventPicture source={{ uri: item.image_url }} />
			</MaskGroup>

			<LikeBar>
				<LikeIcon cor={item.curtido} />
			</LikeBar>
		</Container>
	);
};
