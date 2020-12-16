import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import NavigationProvider from './components/NavigationContext';

function App() {
  return (
    
    <div>
      <NavigationProvider>
      <Navigation/>
      </NavigationProvider>
    </div>
    
  );
}

export default App;
