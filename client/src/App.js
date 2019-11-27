import React from 'react';
import AppNavbar from '../src/components/AppNavbar';
import ShoppingList from '../src/components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';


import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal />
      <ShoppingList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;