const Header = (props) => {
  return <div><h1>{props.course}</h1></div>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].part} {props.parts[0].exercises}</p>
      <p>{props.parts[1].part} {props.parts[1].exercises}</p>
      <p>{props.parts[2].part} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  var total = 0;
  props.parts.forEach(part => {
    total += part.exercises;
  });

  return <div><p>Number of exercises {total}</p></div>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
