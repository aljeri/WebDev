import './App.css';
import Header from './components/Header';
import React from 'react';

function MyButton() {

  const handleClick =()=>{
    alert('You clicked me!');
  }
  return (
  <button onClick={handleClick}>
      Click me
  </button>
  );
  }


function Test (){
  const first='noura';
  const last ='aljeri';
  return (
    <ul>
      <li>First Name: {first}</li>
      <li>Last Name: {last}</li>
    </ul>
  );

}
function Names(props){
  return (<h1> Hello {props.name}</h1>);

}
//function App() { //functional component! 
const App = () => {
  const name ='Ahmad';
  const isShowing =true;
  return (
      <div className="App">
        <div className="App-header">
          <Header />
          <h1> Hello, {isShowing? name: 'Guest'}!</h1>
          <Test />
        </div>
        <MyButton />
        <Names name="noura" />
      </div>
     
    );
}

export default App;
