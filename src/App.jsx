import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)

  // Increase by 1 every second when running
  useEffect(() => {
    if (!isRunning) return
    const timerId = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(timerId)
  }, [isRunning])

  const start = () => setIsRunning(true)
  const stop = () => setIsRunning(false)
  const reset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const display = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  return (
    <div className="simple-wrapper">
      <h1>Simple Stopwatch</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={stop} disabled={!isRunning}>Stop</button>
        <button onClick={reset} disabled={!seconds && !isRunning}>Reset</button>
      </div>
    </div>
  )
}

export default App
