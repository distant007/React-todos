import { useState, useEffect, useRef } from 'react'
const Timer = (props) => {
  const [sec, setSec] = useState(props.sec)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef()
  const timerTodo = () => {
    let second = sec % 60
    let minutes = Math.floor(sec / 60)
    const { onTimeChange, id } = props
    if (props.complete) {
      setIsRunning(false)
      clearInterval(intervalRef.current)
    } else {
      if (second !== 0 && minutes >= 0) {
        second--
        setSec(second + minutes * 60)
      } else if (minutes === 0 && second === 0) {
        setIsRunning(false)
        clearInterval(intervalRef.current)
      } else if (minutes !== 0 && second === 0) {
        second = 59
        minutes--
        console.log(second)
        setSec(59 + minutes * 60)
      }
    }
    second = minutes * 60 + second
    onTimeChange(id, second)
  }
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(timerTodo, 1000)
      return () => clearInterval(intervalRef.current)
    } else {
      clearInterval(intervalRef.current)
    }
  })

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
      {Math.floor(props.sec / 60)}:{props.sec % 60}
    </span>
  )
}

export default Timer
