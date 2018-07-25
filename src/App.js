import React, { Component } from 'react';
import styled from 'styled-components';

// Component imports

import Projects from './components/Projects';
import Intro from './components/Intro';

const AppWrapper = styled.div`
  box-sizing:border-box;
  padding:20px;
  .disclaimer{
    margin-top:4rem;
    margin-bottom:2rem;
    font-size:.875rem;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <Intro/>
        <Projects/>
        <p className='disclaimer'>
          Disclaimer: As a web developer, I could have created a website to showcase my skills, but instead I wanted to showcase the projects I work on which I spent most of my time during & outside of school. The projects are organized by most recent and most important. This website was built using React and the code is available in my Github.
        </p>
      </AppWrapper>
    );
  }
}

export default App;
