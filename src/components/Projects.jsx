import React, { Component } from 'react';
import styled from 'styled-components';
import projectData from './projectData';

const ProjectChunkWrapper = styled.div`
  margin-top:2rem;
  h1{
    font-size:1.4rem;
    font-weight:500;
  }
  p{
    margin-top:1rem;
  }
  .desc{

  }

`

const ProjectWrapper = styled.div`
  margin-top:2.5rem;
  & > h1 {
    font-size:1.6rem;
    color:#4870F8;
  }
`

class Link extends Component {
  render(){
    return(
      <a href={this.props.to} target='_blank'>{this.props.text}</a>
    )
  }
}

class ProjectChunk extends Component {
  render(){
    const project = this.props.project;
    return(
      <ProjectChunkWrapper>
        <h1>{project.title}</h1>
        <p className='desc'>
          { project.desc !== '' ? project.desc : 'Project description not added'}
        </p>
        <p>
          { project.code !== '' ? <Link to={project.code} text="Code"/> : 'Code not available'}
        </p>
        <p>
          { project.link !== '' ? <Link to={project.link} text="Link"/> : 'Link not available'}
        </p>
      </ProjectChunkWrapper>
    )
  }
}

class Projects extends Component {
  render(){
    return (
      <ProjectWrapper>
        <h1>Projects</h1>
      {
        projectData.map((project,i)=>{
          return <ProjectChunk project={project} key={i}/>
        })
      }
      </ProjectWrapper>
    )
  }
}

export default Projects;
