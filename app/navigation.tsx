import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./home";
import ListaScreen from "./ListaScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  ListaScreen: { nomeLista: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListaScreen" component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
