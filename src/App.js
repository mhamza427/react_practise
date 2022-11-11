import Greeting from './components/Greeting';
import Greetings from './components/create_element_greeting';
import SuperHero from './components/hero_name';
import './App.css';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <>
        <Greetings />
        <Greeting />
        <SuperHero name="Clark" supername="Super Man" />
      </>
    );
  }
}

export default App;
