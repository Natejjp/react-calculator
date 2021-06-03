import React, { useState } from 'react'

export function App() {
  const [answer, setAnswer] = useState(0)

  function handleNumber() {
    setAnswer(7)
    console.log('clicked')
  }

  return (
    <main>
      <section>
        <ul>
          <li className="input">{answer}</li>
          <li className="clear">AC</li>
          <li>/</li>
          <li onClick={handleNumber}>7</li>
          <li>8</li>
          <li>9</li>
          <li>*</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>+</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>-</li>
          <li className="zero">0</li>
          <li>.</li>
          <li>=</li>
        </ul>
      </section>
    </main>
  )
}
