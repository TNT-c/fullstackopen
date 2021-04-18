import React from 'react'

const App = () => {
  
  const course = 
  {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      }, 
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }
  

  return (
    <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
  )
}

const Header = (props) => {

  return (
    <div>
      {props.course.name}
    </div>
  )

}

const Content = (props) => {

  return (
    <div>
      <Part props={props}/>
      <Part props={props}/>
      <Part props={props}/>
    </div>
  )

}
const Part = (props) => {
  
  return (
    <div>
      {/* {props.course.part} */}
    </div>
  )

}

const Total = () => {

  return (
    <div>
    </div>
  )

}

export default App