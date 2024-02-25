import Part from "./Part"

const Course = ({ course }) => {
  const total = course.parts.reduce(
    (sum, part) => { return sum + part.exercises }, 0)

  return (
    <div>
      <h1>{course.name}</h1>
      
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
      
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

export default Course  