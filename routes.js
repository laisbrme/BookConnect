// 1º Importando as screens
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import News from "./src/screens/News";
import Favorites from "./src/screens/Favorites";
import Events from "./src/screens/Events";
import Historic from "./src/screens/Historic";

// 2º Criando a navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { CORES } from "./src/constants/cores";
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
		<Stack.Navigator initialRouteName="Login">
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
							color={focused ? CORES.ICONE_ATIVO : CORES.ICONE_INATIVO}
						/>
					),
					tabBarActiveTintColor: CORES.ICONE_ATIVO,
					tabBarInactiveTintColor: CORES.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Leituras"
				component={Historic}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialIcons
							name="book"
							size={30}
							color={focused ? CORES.ICONE_ATIVO : CORES.ICONE_INATIVO}
						/>
					),
					tabBarActiveTintColor: CORES.ICONE_ATIVO,
					tabBarInactiveTintColor: CORES.ICONE_INATIVO,
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
							color={focused ? CORES.ICONE_ATIVO : CORES.ICONE_INATIVO}
						/>
					),
					tabBarActiveTintColor: CORES.ICONE_ATIVO,
					tabBarInactiveTintColor: CORES.ICONE_INATIVO,
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
							color={focused ? CORES.ICONE_ATIVO : CORES.ICONE_INATIVO}
						/>
					),
					tabBarActiveTintColor: CORES.ICONE_ATIVO,
					tabBarInactiveTintColor: CORES.ICONE_INATIVO,
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
							color={focused ? CORES.ICONE_ATIVO : CORES.ICONE_INATIVO}
						/>
					),
					tabBarActiveTintColor: CORES.ICONE_ATIVO,
					tabBarInactiveTintColor: CORES.ICONE_INATIVO,
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};
