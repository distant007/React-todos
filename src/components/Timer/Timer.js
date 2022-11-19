import { Component } from 'react'

export default class Timer extends Component {
  state = {
    timerSwitch: null,
    min: this.props.min,
    sec: this.props.sec,
  }
  startTimer = () => {
    if (this.state.timerSwitch === null && this.props.complete === false) {
      this.setState(() => {
        return {
          timerSwitch: setInterval(this.timer, 1000),
        }
      })
    }
  }
  stopTimer = () => {
    clearInterval(this.state.timerSwitch)
    this.setState(() => {
      return {
        timerSwitch: null,
      }
    })
  }
  timer = () => {
    let second = Number(this.state.sec)
    let min = Number(this.state.min)
    const { onTimeChange, id } = this.props
    if (this.props.complete) {
      clearInterval(this.state.timerSwitch)
      this.setState(() => {
        return {
          timerSwitch: null,
        }
      })
    }
    if (second !== 0 && min >= 0) {
      second--
      this.setState(() => {
        return {
          sec: second,
        }
      })
    } else if (min === 0 && second === 0) {
      clearInterval(this.state.timerSwitch)
      this.setState(() => {
        return {
          min: 0,
          sec: 0,
          timerSwitch: null,
        }
      })
    } else {
      min--
      this.setState(() => {
        return {
          sec: 59,
          min: min,
        }
      })
    }
    onTimeChange(id, min, second)
  }
  render() {
    const { min, sec } = this.state
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.startTimer}></button>
        <button className="icon icon-pause" onClick={this.stopTimer}></button>
        {min}:{sec}
      </span>
    )
  }
}
