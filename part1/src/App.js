import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name={name} age={age}/>
    <Hello name="Daisy" age={26 + 10}/>
  </div>
  )}

export default App;