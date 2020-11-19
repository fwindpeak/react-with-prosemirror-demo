import './App.css'
import { Editor } from './components/Editor'
import { options } from './components/Config'

function onChange(doc) {
  console.log(doc)
}

function App() {
  return (
    <div className="App">
      <Editor options={options} onChange={onChange} />
    </div>
  )
}

export default App
