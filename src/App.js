import { useState } from 'react'
import SimpleEditor from './SimpleEditor'

function ResultDiv(props) {
  return <pre>{JSON.stringify(props.value, null, 2)}</pre>
}

function App() {
  const [value, setValue] = useState('')
  function onChange(doc) {
    console.log('app doc,onchange', doc)
    setValue(doc)
  }
  return (
    <div>
      <SimpleEditor value={value} onChange={onChange}></SimpleEditor>
      <ResultDiv value={value}></ResultDiv>
    </div>
  )
}

export default App
