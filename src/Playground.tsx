import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Playground: React.FC = function() {
  let sales = 123_456_789;
  let course = 'TypeScript';
  // let is_published = true;
  let level;
  level = 1
  level = 'a'
  const [sums, setSums] = useState(0)
  

  let numbers: number[] = [1, 2, 3]

  let user: [number, string] = [1, 'Ian']
  

  function render(document: any) {
    let initialValue = 0
    setSums(sums + document.reduce((accumulator:number, currentValue:number) => accumulator + currentValue,
    initialValue))
  }

  

  return (
    <>
      <div>
        <h1>Hewwo Evwrybodwy</h1>
        <h2>{sales}</h2>
        <h2>{course}</h2>
        <h3>{numbers}</h3>
        <h3>{sums}</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => render(numbers)}>hello</button>
    </>
  )
}

export {Playground}
