import { useState } from 'react'
import { useInterval } from 'use-interval'
const Timer = (props) => {
  const [min, setMin] = useState(props.min)
  const [sec, setSec] = useState(props.sec)
  const [isRunning, setIsRunning] = useState(false)

  const timerTodo = () => {
    let second = Number(sec)
    let minutes = Number(min)
    const { onTimeChange, id } = props
    if (props.complete) {
      setIsRunning(false)
    }
    if (second !== 0 && minutes >= 0) {
      second--
      setSec(second)
    } else if (minutes === 0 && second === 0) {
      setIsRunning(false)
      setMin(0)
      setSec(0)
    } else {
      minutes--
      setSec(59)
      setMin(minutes)
    }
    onTimeChange(id, minutes, second)
  }
  useInterval(
    () => {
      timerTodo()
    },
    isRunning ? 1000 : null
  )
  const startTimer = () => {
    setIsRunning(true)
  }
  const stopTimer = () => {
    setIsRunning(false)
  }
  return (
    <span className="description">
      <button className="icon icon-play" onClick={startTimer}></button>
      <button className="icon icon-pause" onClick={stopTimer}></button>
      {min}:{sec}
    </span>
  )
}

export default Timer
