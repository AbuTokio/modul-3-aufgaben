import { useState } from "react"

export default function DayNightChanger() {
  const [darkMode, setDarkmode] = useState<boolean>(false)

  function changeMode() {
    setDarkmode(!darkMode)
  }

  return (
    <>
      <div
        className={`flex justify-between items-center flex-col gap-8 w-[30vw] p-8 border ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}>
        <h1 className="text-6xl font-bold">Day</h1>
        <button className="border rounded-xl px-4 py-2 bg-white text-black" onClick={changeMode}>
          Change to Night
        </button>
      </div>
    </>
  )
}
