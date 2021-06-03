import React, { useState } from 'react'

export function App() {
  const [answer, setAnswer] = useState(0)

  return (
    <main>
      <section>
        <ul>
          <li className="input">{answer}</li>
          <li className="clear">AC</li>
          <li>/</li>
          <li onClick={() => setAnswer(7)}>7</li>
          <li onClick={() => setAnswer(8)}>8</li>
          <li onClick={() => setAnswer(9)}>9</li>
          <li>*</li>
          <li onClick={() => setAnswer(4)}>4</li>
          <li onClick={() => setAnswer(5)}>5</li>
          <li onClick={() => setAnswer(6)}>6</li>
          <li>+</li>
          <li onClick={() => setAnswer(1)}>1</li>
          <li onClick={() => setAnswer(2)}>2</li>
          <li onClick={() => setAnswer(3)}>3</li>
          <li>-</li>
          <li className="zero" onClick={() => setAnswer(0)}>
            0
          </li>
          <li>.</li>
          <li>=</li>
        </ul>
      </section>
    </main>
  )
}
