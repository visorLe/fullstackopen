import { useState } from 'react'

const calculateAverageFeedback =
  (totalFeedbackAmount, amountPerFeedback) => {
    const amountGood = amountPerFeedback[0]
    const amountBad = amountPerFeedback[2]

    const score = -1 * amountBad + amountGood

    return (score / totalFeedbackAmount)
  }

const calculatePercentOfPositiveFeedbacks =
  (totalFeedbackAmount, amountGood) => amountGood / totalFeedbackAmount * 100

const Button = ({ text, clickHandler }) =>
  <button onClick={clickHandler}>{text}</button>

const ButtonSection = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          clickHandler={button.clickHandler}
        />
      ))}
    </div>
  )
}

const StatisticsEntry = ({ text, value }) => <>{text} {value}<br /></>

const StatisticsSection = ({ entries }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <StatisticsEntry
          key={index}
          text={entry.text}
          value={entry.value}
        />
      ))}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodCounter = () => setGood(good + 1)
  const increaseNeutralCounter = () => setNeutral(neutral + 1)
  const increaseBadCounter = () => setBad(bad + 1)

  const amountPerFeedback = [good, neutral, bad]
  const totalFeedbackAmount = amountPerFeedback.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )

  let averageFeedback = 0
  let percentOfPositiveFeedback = 0
  
  if (totalFeedbackAmount > 0) {
    averageFeedback =
      calculateAverageFeedback(totalFeedbackAmount, amountPerFeedback)

    percentOfPositiveFeedback =
      calculatePercentOfPositiveFeedbacks(totalFeedbackAmount, good)
  }

  const buttons = [
    {
      text: "good",
      clickHandler: increaseGoodCounter
    },
    {
      text: "neutral",
      clickHandler: increaseNeutralCounter
    },
    {
      text: "bad",
      clickHandler: increaseBadCounter
    }
  ]

  const statiscticsEntries = [
    {
      text: "good",
      value: good
    },
    {
      text: "neutral",
      value: neutral
    },
    {
      text: "bad",
      value: bad
    },
    {
      text: "all",
      value: totalFeedbackAmount
    },
    {
      text: "average",
      value: averageFeedback
    },
    {
      text: "positive",
      value: percentOfPositiveFeedback + " %"
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
