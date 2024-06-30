// 1º Importando as screens
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import News from "./src/screens/News";
import Favorites from "./src/screens/Favorites";
import Events from "./src/screens/Events";
import Reading from "./src/screens/Reading";
import SelectedBook from "./src/screens/SelectedBook";
import Comments from "./src/screens/Comments";
import UnderConstruction from "./src/screens/UnderConstruction";
import Splash from "./src/screens/Splash";

// 2º Criando a navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { theme } from "./src/styles/theme";
import {
	Entypo,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";

// Navs
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export const StackNavigate = () => {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen
				name="Splash"
				component={Splash}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={TabNavigate}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SelectedBook"
				component={SelectedBook}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Comments"
				component={Comments}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="UnderConstruction"
				component={UnderConstruction}
				options={{ headerShown: true }}
			/>
		</Stack.Navigator>
	);
};

export const TabNavigate = () => {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen
				name="Início"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Entypo
							name="home"
							size={30}
							color={
								focused ? theme.colors.ICONE_ATIVO : theme.colors.ICONE_INATIVO
							}
						/>
					),
					tabBarActiveTintColor: theme.colors.ICONE_ATIVO,
					tabBarInactiveTintColor: theme.colors.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Leituras"
				component={Reading}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialIcons
							name="book"
							size={30}
							color={
								focused ? theme.colors.ICONE_ATIVO : theme.colors.ICONE_INATIVO
							}
						/>
					),
					tabBarActiveTintColor: theme.colors.ICONE_ATIVO,
					tabBarInactiveTintColor: theme.colors.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Novidades"
				component={News}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name="alert-decagram"
							size={30}
							color={
								focused ? theme.colors.ICONE_ATIVO : theme.colors.ICONE_INATIVO
							}
						/>
					),
					tabBarActiveTintColor: theme.colors.ICONE_ATIVO,
					tabBarInactiveTintColor: theme.colors.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Eventos"
				component={Events}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialIcons
							name="event-available"
							size={30}
							color={
								focused ? theme.colors.ICONE_ATIVO : theme.colors.ICONE_INATIVO
							}
						/>
					),
					tabBarActiveTintColor: theme.colors.ICONE_ATIVO,
					tabBarInactiveTintColor: theme.colors.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Favoritos"
				component={Favorites}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name="cards-heart"
							size={30}
							color={
								focused ? theme.colors.ICONE_ATIVO : theme.colors.ICONE_INATIVO
							}
						/>
					),
					tabBarActiveTintColor: theme.colors.ICONE_ATIVO,
					tabBarInactiveTintColor: theme.colors.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};
