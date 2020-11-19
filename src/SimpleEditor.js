import { Editor } from './components/Editor'
import { options } from './components/Config'

function SimpleEditor(props) {
  return (
    <div
      className="App"
      style={{
        border: '1px dashed',
      }}
    >
      <Editor options={options} onChange={props.onChange} value={props.value} />
    </div>
  )
}

export default SimpleEditor
