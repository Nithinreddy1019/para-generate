import { useState } from 'react'
import './App.css'

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [paragraph, setParagraph] = useState('');

  const words =['i', 'is', 'the', 'anomoly', 'taciturn', 'GRE', 'whatever', 'sing', 'song', 'dance', 'gun', 'bullet', 'blast', 'toothpaste', 'brush', 'cook', 'eat'];

  function genereatePara(){
    let newPara = '';
    for( let i=0;i<wordCount;i++){
      newPara += words[i % words.length] + ' ';
    }

    setParagraph(newPara)
  }


  return (
    <div className='container'>
      <h2>Para generator</h2>
      <div className='child2'>
        <input  type='number' value={wordCount} placeholder='Enter the number of words' onChange={(e) => {setWordCount(e.target.value)}}></input>

        <button onClick={genereatePara}>Generate</button>
      </div>

      <div className='child3'>
        {paragraph}
      </div>
    </div>
  )
}

export default App
