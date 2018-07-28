import React, { Component } from 'react';
import styled from 'styled-components';

const DisclaimerWrapper = styled.p`
  margin-top:4rem;
  margin-bottom:2rem;
  font-size:.875rem;
`

class Disclaimer extends Component {
  render(){
    return (
      <DisclaimerWrapper>
          Disclaimer: As a web developer, I could have created a website to showcase my skills, but instead I wanted to showcase the projects I work on which I spent most of my time during & outside of school. The projects are organized by most recent and most important(the code for the projects also gets messier towards the bottom LOL). This website was built using React and the code is available in my Github.
      </DisclaimerWrapper>
    )
  }
}

export default Disclaimer;
