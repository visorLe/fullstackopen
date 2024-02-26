const Part = ({ part }) =>
  <p>{part.name} {part.exercises}</p>

const Contents = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce(
    (sum, part) => { return sum + part.exercises }, 0)

  return <p><b>total of {total} exercises</b></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <Contents parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course  