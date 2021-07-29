import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component  {
render () {
let firstValue: string ='Manny';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Value {firstValue} is of {typeof firstValue} type!
        </p>
        
      </header>
    </div>
  );
} 
}
export default App;
