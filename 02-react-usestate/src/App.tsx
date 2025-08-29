import "./App.css"
import Counter from "./pages/counter/Counter"
import DayNightChanger from "./pages/dayNightChanger/DayNightChanger"
import Faq from "./pages/faq/Faq"
import Input from "./pages/input/Input"

function App() {
  return (
    <>
      <Faq />
      <Counter />
      <Input />
      <DayNightChanger />
    </>
  )
}

export default App
