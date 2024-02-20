const Header = (props) => {
  return <div><h1>{props.course}</h1></div>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].partname} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].partname} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].partname} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
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
      partname: 'Fundamentals of React',
      exercises: 10
    },
    {
      partname: 'Using props to pass data',
      exercises: 7
    },
    {
      partname: 'State of a component',
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

