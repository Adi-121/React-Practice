import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  let [length, setLength] = useState(14);
  let [allowNumber, setAllowNumber] = useState(false);
  let [allowSpecialChar, setAllowSpecialChar] = useState(false);
  let [password, setPassword] = useState("");

  let passwordGenerator =() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let specialChar = "!@#$%^&*";

    if (allowNumber) str += num;
    if (allowSpecialChar) str += specialChar;

    let size = str.length;
    for (let i = 0; i < length; i++) {
      let ind = Math.floor((Math.random() * 100000) % size);
      // console.log(ind+" ");

      pass += str[ind];
    }
    // console.log(size+' '+ pass + " " + str);

    setPassword(pass);
  };


  useEffect(() => {
    passwordGenerator();
  },
    [length, allowNumber, allowSpecialChar]);


  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    // window object is not present when things are done on server side
    window.navigator.clipboard.writeText(password);
  }

  // used to keep the reference
  const passwordRef = useRef(null);

  return (
    <>
      <div className="bg-black h-screen w-full flex  flex-col">
        <h1 className="text-center text-3xl text-white mt-5">Password Generator</h1>

        <div className="w-3/4 h-1/4 bg-gray-700 mt-4 mx-auto rounded-2xl shadow-md flex justify-center flex-col">
          <input
            className="mt-2 rounded-2xl w-3/4 h-1/4 py-1 px-3 outline-none mx-auto"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          {/* Copy button */}
          <button
            className="w-1/12 h-1/4 p-1 mx-auto mt-2 rounded-xl bg-slate-400 hover:bg-sky-700"
            onClick={copyPasswordToClipboard}

          >copy</button>

          <div className="w-3/4 h-1/2 bg flex flex-row justify-around mx-auto">

            {/* Length Slider */}
            <div className="flex">
              <input
                type="range"
                min='6'
                max='50'
                value={length}
                className="cursor-pointer"
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label className="m-auto mx-4 text-yellow-200">Length:{length}</label>
            </div>

            {/* Checkbox for number */}
            <div className="flex">
              <input
                type="checkbox"
                value={allowNumber}
                className="cursor-pointer outline-none"
                onClick={() => {
                  setAllowNumber((prev) => !prev)
                }}
              />
              <label className="m-auto mx-3 text-yellow-200">Number</label>
            </div>

            {/*Checkbox for special character*/}
            <div className="flex">
              <input
                type="checkbox"
                value={allowSpecialChar}
                className="cursor-pointer outline-none"
                onClick={() => {
                  setAllowSpecialChar((prev) => !prev)
                }}
              />
              <label className="m-auto mx-3 text-yellow-200">Special Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
