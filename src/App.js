import React, { Component } from 'react';
import styled from 'styled-components';

// Component imports

import Projects from './components/Projects';
import Intro from './components/Intro';
import Disclaimer from './components/Disclaimer';

const AppWrapper = styled.div`
  box-sizing:border-box;
  padding:20px;
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <Intro/>
        <Projects/>
        <Disclaimer/>
      </AppWrapper>
    );
  }
}

export default App;
