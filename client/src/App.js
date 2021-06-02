import './App.css';
// import Dashboard from './Pages/Dashboard';
import React, { useEffect, useState } from 'react';
import { Provider } from './store/GlobalState';
import Routers from './Router';
import NavigateButtons from './components/assets/NavigateButtons';
// import Guidance from './components/Guidance';
// import CreateNewBar from './components/CreateNewBar';
// import Preview from './components/Preview';
// import ScreenButtons from './components/ScreenButtons';
// import BasicTemplate from './components/BasicTemplate';
// import ContentConfiguration from './components/ContentConfiguration';
// import TimerConfiguration from './components/TimerConfiguration';
// import StyleConfiguration from './components/StyleConfiguration';
// import TargetingConfiguration from './components/TargetingConfiguration';
// import FormButtonsGroup from './components/FormButtonsGroup';




function App() {

  return (
    <Provider>
      <NavigateButtons />
      <Routers />
    </Provider>
  );
}

export default App;
