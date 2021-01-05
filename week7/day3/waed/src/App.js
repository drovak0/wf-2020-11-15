import './App.css'
import LightSwitch from './components/LightSwitch'
import MyNewComponent from './components/MyNewComponent'


function App() {
  return (
    <div className="App">
      <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
        <button onClick={() => alert("This button has been clicked!")}>Click me!</button>
        <LightSwitch />
      </MyNewComponent>
    </div>
  )
}

export default App