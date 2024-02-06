import './App.css'
import Left_body from './components/Left-body'
import Right_body from './components/Right-body'
import Seekbar from './components/Seekbar'


function App() {

  return (
    <>
      <div className="body-container">
        <Left_body/>
        <Right_body/>
        <Seekbar/>
      </div>
    </>
  )
}

export default App
