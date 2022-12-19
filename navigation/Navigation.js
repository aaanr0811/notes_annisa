import { useAuth } from "../src/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListNotesScreen from '../src/screens/ListNotesScreen';
import CreateNoteScreen from '../src/screens/CreateNoteScreen';
import ShowNoteScreen from '../src/screens/ShowNoteScreen';
import EditNoteScreen from '../src/screens/EditNoteScreen';
import LoginScreen from "../src/screens/LoginScreen";

const Navigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const { isAuthenticated } = useAuth();
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <RootStack.Screen name="App" component={AppNavigator} />
            ) : (
                <RootStack.Screen name="Auth" component={AuthNavigator} />
            )}
        </RootStack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="notes" 
            component={ListNotesScreen} 
            options={{
              headerTitleAlign:"center",
              title:"Annisa Notes"
            }}
            />
            <Stack.Screen 
            name="create" 
            component={CreateNoteScreen} 
            options={{
              headerTitleAlign:"center",
              title:"Create Note"
            }}
            />
            <Stack.Screen 
            name="show" 
            component={ShowNoteScreen} 
            options={{
              headerTitleAlign:"center",
              title:"Note"
            }}
            />
            <Stack.Screen 
            name="edit" 
            component={EditNoteScreen} 
            options={{
              headerTitleAlign:"center",
              title:"Edit Note"
            }}
            />

        </Stack.Navigator>
    );
};

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
    );
};

export default Navigation;
