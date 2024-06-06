import { CORES } from "./src/constants/cores";

// 1º Importando as screens
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import PreLogin from "./src/screens/PreLogin";
import News from "./src/screens/News";
import Profile from "./src/screens/Profile";

// 2º Criando a navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Navs
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const StackNavigate = () => {
	return (
		<Stack.Navigator initialRouteName="PreLogin">
			<Stack.Screen
				name="PreLogin"
				component={PreLogin}
				options={{ headerShown: true, title: " " }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: true, title: " " }}
			/>
			<Stack.Screen
				name="Home"
				component={DrawerNavigate}
				options={{ headerShown: false, title: " " }}
			/>
		</Stack.Navigator>
	);
};

export const DrawerNavigate = () => {
	return (
		<Drawer.Navigator 
			initialRouteName="Home"
		>
			<Drawer.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "Perfil",
					drawerActiveTintColor: "black",

				}}
			/>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{ title: "Início" }}
			/>
			<Drawer.Screen
				name="News"
				component={News}
				options={{ title: "Novidades" }}
			/>
		</Drawer.Navigator>
	);
};
