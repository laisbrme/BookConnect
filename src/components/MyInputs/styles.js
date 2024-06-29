import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  placeholder-color: "#8E8E8E";
`;

const InputWithIcon = ({ iconName, ...props }) => {
  return (
    <Container>
      <Icon name={iconName} size={24} color={theme.colors.ROXO} />
      <StyledTextInput 
        placeholderTextColor="#8E8E8E"
      {...props} />
    </Container>
  );
};

export {InputWithIcon};