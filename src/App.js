import SimpleEditor from './SimpleEditor'

function onChange(doc) {
  console.log('app doc,onchange', doc)
}

function App() {
  return (
    <div
      className="App"
      style={{
        border: '1px dashed',
      }}
    >
      <SimpleEditor value="这是初始数据" onChange={onChange}></SimpleEditor>
    </div>
  )
}

export default App
