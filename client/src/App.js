import React from 'react';
import AppNavbar from '../src/components/AppNavbar';
import ShoppingList from '../src/components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
