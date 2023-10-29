import React from 'react';
import './App.css';
import Counter from './components/classComponent'
import Counter_1 from './components/useStateHook';
import Counter_2 from './components/useEffectHook';
import UserComponent from './components/useEffectHook1';
import LiveTextInput from './components/LiveTextInput';
function App() {
  return (
    <div className='App'>
      <Counter/>
      <Counter_1/>
      <Counter_2/>
      <UserComponent/>
      <LiveTextInput/>
   </div>

  );
}

export default App;
