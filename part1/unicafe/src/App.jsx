import { useState } from 'react'

const Button = ({ text, clickHandler }) =>
  <button onClick={clickHandler}>{text}</button>

const ButtonSection = ({ buttons }) => {
  const [good, neutral, bad] = buttons

  return (
    <div>
      <Button text={good.text} clickHandler={good.clickHandler} />
      <Button text={neutral.text} clickHandler={neutral.clickHandler} />
      <Button text={bad.text} clickHandler={bad.clickHandler} />
    </div>
  )
}

const StatisticsEntry = ({ text, amount }) =>
  <>{text} {amount}<br/></>

const StatisticsSection = ({ entries }) => {
  const [good, neutral, bad] = entries

  return (
    <div>
      <StatisticsEntry text={good.text} amount={good.amount} />
      <StatisticsEntry text={neutral.text} amount={neutral.amount} />
      <StatisticsEntry text={bad.text} amount={bad.amount} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseCounter = (counterFunction, counterValue) =>
    () => counterFunction(counterValue + 1)

  const buttons = [
    {
      text: "good",
      clickHandler: increaseCounter(setGood, good)
    },
    {
      text: "neutral",
      clickHandler: increaseCounter(setNeutral, neutral)
    },
    {
      text: "bad",
      clickHandler: increaseCounter(setBad, bad)
    }
  ]

  const statiscticsEntries = [
    {
      text: "good",
      amount: good
    },
    {
      text: "neutral",
      amount: neutral
    },
    {
      text: "bad",
      amount: bad
    }
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <ButtonSection buttons={buttons} />

      <h1>statistics</h1>
      <StatisticsSection entries={statiscticsEntries} />
    </div>
  )
}

export default App
