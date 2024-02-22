import { useState } from 'react'

const getRandomIntToMax = (max) => Math.floor(Math.random() * max)

const Button = ({ text, clickHandler }) =>
  <button onClick={clickHandler}>{text}</button>

const Votes = ({ points: votes }) => <p>has {votes} points</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandomAnecdote = () => {
    let number = getRandomIntToMax(anecdotes.length)

    // do not print the same anecdote twice in a row
    while (number === selected) {
      number = getRandomIntToMax(anecdotes.length)
    }

    console.log("Printing anecdote number", number);

    setSelected(number)
  }

  const voteAnecdote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1

    console.log("Voted for anecdote:", selected,
      "\nPoints:", votesCopy[selected]);

    setVotes(votesCopy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Votes points={votes[selected]} />
      <Button
        text="Next anecdote"
        clickHandler={getRandomAnecdote}
      />
      <Button
        text="Vote"
        clickHandler={voteAnecdote}
      />
    </div>
  )
}

export default App
