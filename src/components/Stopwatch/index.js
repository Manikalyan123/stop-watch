// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {Sec: 0, Min: 0, isTimerRunning: false}

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onIncreaseSec = () => {
    this.setState(prevState => ({Sec: prevState.Sec + 1}))
  }

  onStart = () => {
    this.timeInterval = setInterval(() => {
      this.onIncreaseSec()
    }, 1000)
    this.setState({isTimerRunning: true})
  }

  onMinIncrement = () => {
    this.setState(prevState => ({Sec: 0, Min: prevState.Min + 1}))
  }

  Seconds = () => {
    const {Sec} = this.state
    if (Sec < 10) {
      return `0${Sec}`
    }
    return Sec
  }

  Minutes = () => {
    const {Min} = this.state

    if (Min < 10) {
      return `0${Min}`
    }

    return Min
  }

  onStop = () => {
    console.log('hi')
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    this.setState({Min: 0, Sec: 0})
  }

  render() {
    const time = `${this.Minutes()}:${this.Seconds()}`
    const {Sec, isTimerRunning} = this.state
    if (Sec === 60) {
      this.onMinIncrement()
    }

    return (
      <div className="Cont">
        <div className="main-cont">
          <h1>Stopwatch</h1>
          <div className="contentCont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clockImg"
            />
            <h1 className="Time">{time}</h1>
            <div className="buttonCont">
              <button
                type="button"
                className="button"
                onClick={this.onStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                id="stop"
                type="button"
                className="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                id="restart"
                type="button"
                className="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
