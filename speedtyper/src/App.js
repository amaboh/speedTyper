import {useState, useEffect} from "react"

function App() {
const [ textField, setTextField] = useState("")
const [ countDown, setCountDown] = useState(13)

function handleChange (event){
    const {value} = event.target
    setTextField(value)
}

useEffect(()=>{
  setTimeout(()=>{
    if (countDown > 0 ){
      setCountDown(prevTime => prevTime - 1)
    }
  }, 1000)
}, [countDown])

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
      <button>Start</button>
      <h1>Word Count: {countWords(textField)}</h1>
    </div>
  );
}

export default App;
