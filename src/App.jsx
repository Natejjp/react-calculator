import React, { useState } from 'react'

export function App() {
  const [displayNumber, setDisplayNumber] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)

  function clear() {
    setDisplayNumber(0)
    setFirstNumber(0)
  }

  function add() {
    setFirstNumber(displayNumber)
  }

  function sub() {
    setFirstNumber(displayNumber)
  }

  function equal() {
    setDisplayNumber(displayNumber + firstNumber)
  }

  return (
    <main>
      <section>
        <ul>
          <li className="input">{displayNumber}</li>
          <li onClick={clear} className="clear">
            AC
          </li>
          <li>/</li>
          <li onClick={() => setDisplayNumber(7)}>7</li>
          <li onClick={() => setDisplayNumber(8)}>8</li>
          <li onClick={() => setDisplayNumber(9)}>9</li>
          <li>*</li>
          <li onClick={() => setDisplayNumber(4)}>4</li>
          <li onClick={() => setDisplayNumber(5)}>5</li>
          <li onClick={() => setDisplayNumber(6)}>6</li>
          <li onClick={add}>+</li>
          <li onClick={() => setDisplayNumber(1)}>1</li>
          <li onClick={() => setDisplayNumber(2)}>2</li>
          <li onClick={() => setDisplayNumber(3)}>3</li>
          <li onClick={sub}>-</li>
          <li className="zero" onClick={() => setDisplayNumber(0)}>
            0
          </li>
          <li>.</li>
          <li onClick={equal}>=</li>
        </ul>
      </section>
    </main>
  )
}
