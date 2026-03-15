import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  let [toggle, setToggle] = useState(true)
  return (
    <div>
      {toggle ? <Register setToggle={setToggle} /> : <Login setToggle={setToggle} />}
      {/* <Register />
      <Login /> */}
    </div>
  )
}

export default App