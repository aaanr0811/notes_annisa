import React from 'react';
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./navigation/Navigation";
import {NotesProvider} from './src/context/NotesContext';

export default function App() {
    return (
    <NotesProvider>
      
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    </NotesProvider>

    );
}