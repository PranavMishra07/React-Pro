import { Routes,Route } from "react-router-dom"
import "./App.css"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Sign from "./Sign"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sign" element={<Sign/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
