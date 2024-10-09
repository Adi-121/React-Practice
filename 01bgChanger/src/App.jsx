import { useState } from "react"

function App() {
  const [color, setColor] = useState("amber");

  return (
    <>
      <div className={`w-full h-screen bg-${color}-500 flex flex-col`}>
        <div className=" bg-white w-14 h-6 rounded-xl text-center mx-auto mt-2">
          <button onClick={() => setColor("amber")}> Reset </button>
        </div>
        <div className={`w-3/4 bg-white h-16 rounded-3xl mx-auto my-auto flex p-4 mb-3`}>
          <button onClick={() => setColor("blue")} className="bg-blue-500 w-1/12 m-auto object-contain p-1 rounded-xl"
          >Blue</button>
          <button onClick={() => setColor("pink")} className="bg-pink-500 w-1/12 m-auto object-contain p-1 rounded-xl">Pink</button>
          <button onClick={() => setColor("red")} className="bg-red-500 w-1/12 m-auto object-contain p-1 rounded-xl">Red</button>
          <button onClick={() => setColor("orange")} className="bg-orange-500 w-1/12 m-auto object-contain p-1 rounded-xl">Orange</button>
          <button onClick={() => setColor("green")} className="bg-green-500 w-1/12 m-auto object-contain p-1 rounded-xl">Green</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-500 w-1/12 m-auto object-contain p-1 rounded-xl">Yellow</button>
          <button onClick={() => setColor("gray")} className="bg-gray-500 w-1/12 m-auto object-contain p-1 rounded-xl">Grey</button>
        </div>
        
      </div>
    </>
  )
}

export default App
