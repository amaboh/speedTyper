import {useState, useEffect} from "react"

function App() {

const TIME_REMAINING = 6

const [ textField, setTextField] = useState("")
const [ countDown, setCountDown] = useState(TIME_REMAINING)
const [startGame, setStartGame] = useState(false)
const [wordCount, setWordCount] = useState(0)

function handleChange (event){
    const {value} = event.target
    setTextField(value)
}

function gameOn(){
  setStartGame(true)
  setCountDown(TIME_REMAINING)
  setTextField("")
  
}

function endGame(){
  setStartGame(false)
  setWordCount(countWords(textField))
}

useEffect(()=>{
  setTimeout(()=>{
    if (startGame && countDown > 0 ){
      setCountDown(prevTime => prevTime - 1)
    } else if(countDown === 0){
      endGame()
    }
  }, 1000)
}, [countDown, startGame])

function countWords(str){
  const numWords = str.trim().split("")
  const filterWords = numWords.filter(words => words !== "" )
  return filterWords.length
}



console.log(textField)
  return (
    <div className="App">
      <h1>How fast do you type? </h1>
      <textarea value={textField}
                onChange={handleChange}
                  />
      <h4>Time remaining: {countDown}</h4>
      <button onClick={gameOn()}>Start</button>
      <h1>No. of Character: {wordCount}</h1>
    </div>
  );
}

export default App;
