import './App.css';
// import Dashboard from './Pages/Dashboard';
import React, { useEffect, useState, useContext } from 'react';
import { Provider } from './store/GlobalState';
import Routers from './Router';
import NavigateButtons from './components/assets/NavigateButtons';
import { RootContext } from './store/GlobalState';



function App() {
  const [navigation, setNavigation] = useState (true)
  console.log('App.js')
 
  return (
    <Provider>
      {navigation && <NavigateButtons/>}
      <Routers />
    </Provider>
  );
}

export default App;
