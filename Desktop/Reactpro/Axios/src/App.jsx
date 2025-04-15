import Insert from "./Insert"
import Fetchapi from "./Fetchapi"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Insert />} />
        <Route path="/fetch" element={<Fetchapi />} />
      </Routes>
    </>
  )
}

export default App

