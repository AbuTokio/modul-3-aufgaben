import { useState } from "react"

export default function Faq() {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [showLongAnswer, setShowLongAnswer] = useState<boolean>(false)
  const [longAnswer] = useState<string>(
    "React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial. As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it."
  )

  function toggleAnswer() {
    setShowAnswer(!showAnswer)
  }

  function toggleLongAnswer() {
    setShowLongAnswer(!showLongAnswer)
  }

  return (
    <>
      <div className="flex justify-between items-center flex-col bg-gray-800 text-white w-[30vw] p-8">
        <div className="flex justify-between items-center w-full p-4">
          <p>Why is React great?</p>
          <button
            className="px-4 py-1 bg-gray-100 text-black cursor-pointer active:bg-blue-900 w-12"
            onClick={toggleAnswer}>
            {showAnswer ? "-" : "+"}
          </button>
        </div>
        {showAnswer && (
          <div className="flex justify-between items-center w-full p-4 border-t">
            <p className="text-gray-400">Fast Learning Curve</p>
            <button
              className="px-4 py-1 bg-gray-100 text-black cursor-pointer active:bg-blue-900 w-12"
              onClick={toggleLongAnswer}>
              {showLongAnswer ? "-" : "+"}
            </button>
          </div>
        )}
        {showLongAnswer && (
          <div className="flex justify-between items-center w-full p-4">
            <p className="text-gray-400">{longAnswer}</p>
          </div>
        )}
      </div>
    </>
  )
}
