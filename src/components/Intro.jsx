import React, { Component } from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  margin-top:4rem;
  h1{
    color:#4A50FF;
    margin-bottom:2rem;
  }
  p, div {
    margin-top:1rem;
  }
  p{
    font-size:.875rem;
  }
  span{
    margin-right:1rem;
    a{
      font-size:.875rem;
    }
  }
`

class Intro extends Component {
  render(){
    return (
      <IntroWrapper>
        <h1>Hi, I am Deniz :)</h1>
        <p>I am a full stack web developer and this is my website for displaying the links to my projects!</p>
        <p>Graduated from Carnegie Mellon this May with a major in Communication Design and a minor in Computer Science. I have been in web development since Freshman year and have been constantly learning since.</p>
        <p>You can reach me out through denizaydinsokullu@gmail.com!</p>
        <div>
          <span><a href={'https://github.com/denizsokullu'} target='_blank'>Github</a></span>
          <span><a href={'https://github.com/denizsokullu'} target='_blank'>Resume</a></span>
        </div>
      </IntroWrapper>
    )
  }
}

export default Intro;
