function InsertBreak() {
  return (<br></br>)
}

function CurrentTime() {
  return (
    Date().toLocaleString()
  )
}

let UserDetails = {
  name: "Sara",
  Age: "32"
}

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function handleClick() {
  return (
    alert (date().toLocaleString)
  )
}

export default function Square() {
  return (

    <>
      <div>
        <h1>Class </h1>
        <MyButton />
      </div>

      <InsertBreak />

      <div className="board-row">
        <button onClick={handleClick()} className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>

      <InsertBreak />

      <div>
        <h2>My sweet wife, {UserDetails.name}</h2>
        <h2>You are always sweet 16, though you are {UserDetails.Age}!</h2>
      </div>

      <InsertBreak />

      <p>Current Date and Time: <CurrentTime /> </p>
      
      <InsertBreak />

    </>
  )
}
