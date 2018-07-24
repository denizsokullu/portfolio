import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components'

// Component imports

import Projects from './components/Projects';
import Intro from './components/Intro';

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
      </AppWrapper>
    );
  }
}

export default App;
