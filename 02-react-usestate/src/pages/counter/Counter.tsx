import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  function addCount() {
    setCount(count + 1)
  }

  function substractCount() {
    setCount(count - 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <>
      <div className="flex justify-between items-center flex-col gap-8 w-[30vw] p-8 border">
        <div className="flex justify-between items-center w-1/2">
          <button
            className="px-4 py-1 bg-gray-100 text-black cursor-pointer active:bg-gray-400 border w-12"
            onClick={addCount}>
            +
          </button>
          <p>{count}</p>
          <button
            className="px-4 py-1 bg-gray-100 text-black cursor-pointer active:bg-gray-400 border w-12"
            onClick={substractCount}>
            -
          </button>
        </div>
        <button
          className="px-4 py-1 bg-gray-100 text-black cursor-pointer active:bg-gray-400 border"
          onClick={resetCount}>
          Reset
        </button>
      </div>
    </>
  )
}
