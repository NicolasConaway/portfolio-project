import React from 'react';
import './App.css';
import Title from './Components/Title/index'
import About from './Components/About/index'
import Projects from './Components/Projects/index'
import ComeFindMe from './Components/ComeFindMe/index'

class App extends React.Component {

  render(){
    return (
      <>

        < Title />
        < About />
        < Projects />
        < ComeFindMe />

      </>
    )
  }
}

export default App;
