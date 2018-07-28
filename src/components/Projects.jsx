import React, { Component } from 'react';
import styled from 'styled-components';
import projectData from '../data/projectData';

const ProjectChunkWrapper = styled.div`
  margin-bottom:4rem;
  h1{
    font-size:1.2rem;
    font-weight:600;
  }
  p, div{
    margin-top:1rem;
    font-size:.875rem;
  }
  h3{
    font-size:1rem;
    font-weight:600;
  }
  .desc{

  }
  div span{
    a{
      margin-right:1rem;
    }
  }

`

const ProjectWrapper = styled.div`
  margin-top:2.5rem;
  & > h1 {
    font-size:1.6rem;
    color:#4870F8;
    margin-bottom:2rem;
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
      <ProjectChunkWrapper className='project-chunk'>
        <h1>{project.title}</h1>
        <p className='desc'>
          { project.desc !== '' ? project.desc : 'Project description not added'}
        </p>
        <div>
          <h3>Challenges</h3>
          <p> {project.challenges} </p>
        </div>
        <div>
          <h3>Technologies used</h3>
          <p> {project.techUsed.join(', ') }</p>
        </div>
        <div>
        <span>
          { project.code !== '' ? <Link to={project.code} text="Code"/> : 'Code not available'}
        </span>
        <span>
          { project.link !== '' ?
              typeof project.link === 'object' ?
                  Object.keys(project.link).map((l,i)=>{
                    return <Link to={project.link[l]} key={i} text={l}/>
                  })
               : <Link to={project.link} text="Link"/>
            : 'Link not available'}
        </span>
        </div>
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
