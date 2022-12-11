import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListNotesScreen from './src/screens/ListNotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ShowNoteScreen from './src/screens/ShowNoteScreen';
import {NotesProvider} from './src/context/NotesContext';
import EditNoteScreen from './src/screens/EditNoteScreen';

const Stack = createStackNavigator()

function App() {
  return (
      <NavigationContainer>
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
      </NavigationContainer>
  );
}

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  )
}