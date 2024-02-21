import { useState } from 'react'

const calculateAverageFeedback =
  (totalFeedbackAmount, amountPerFeedback) => {
    const good = amountPerFeedback[0]
    const bad = amountPerFeedback[2]

    const score = -1 * bad + good

    return (score / totalFeedbackAmount)
  }

const calculatePercentOfPositiveFeedback =
  (totalFeedbackAmount, amountGood) => amountGood / totalFeedbackAmount * 100

const Button = ({ text, clickHandler }) =>
  <button onClick={clickHandler}>{text}</button>

const ButtonSection = ({ clickHandlers }) => {
  const [increaseGoodCounter, increaseNeutralCounter, increaseBadCounter] =
    clickHandlers
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

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ data }) => {
  const [amountPerFeedback, totalFeedbackAmount] = data

  if (totalFeedbackAmount === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const [good, neutral, bad] = amountPerFeedback

  const averageFeedback =
    calculateAverageFeedback(totalFeedbackAmount, amountPerFeedback)

  const percentOfPositiveFeedback =
    calculatePercentOfPositiveFeedback(totalFeedbackAmount, good)

  const lines = [
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
    <table>
      <tbody>
        {lines.map((line, index) => (
          <StatisticLine
            key={index}
            text={line.text}
            value={line.value}
          />
        ))}
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodCounter = () => setGood(good + 1)
  const increaseNeutralCounter = () => setNeutral(neutral + 1)
  const increaseBadCounter = () => setBad(bad + 1)
  const buttonClickHandlers =
    [increaseGoodCounter, increaseNeutralCounter, increaseBadCounter]

  const amountPerFeedback = [good, neutral, bad]
  const totalFeedbackAmount = amountPerFeedback.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const statisticsData = [amountPerFeedback, totalFeedbackAmount]

  return (
    <div>
      <h1>give feedback</h1>
      <ButtonSection clickHandlers={buttonClickHandlers} />

      <h1>statistics</h1>
      <Statistics data={statisticsData} />
    </div>
  )
}

export default App
