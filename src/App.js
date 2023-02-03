import "./App.css";
import JSConfetti from "js-confetti";
import { relationship } from "./flames";
import { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [r, setR] = useState("");

  const handleClick = () => {
    if (name1 && name2) {
      setR(relationship(name1, name2));
      jsConfetti.addConfetti();
      jsConfetti.addConfetti();
    }
  };
  const handleReset = () => {
    document.getElementById("yourName").focus();
    setName1("");
    setName2("");
    setR("");
  };

  const jsConfetti = new JSConfetti();

  return (
    <div className="h-screen w-50 flex sm:bg-[url('./img/8318.jpg')]">
      <form className="mx-auto h-full w-full max-w-md">
        <div className="flex justify-center items-center">
          <div className="pt-10 pb-10">
            <p className="text-3xl text-purple-500 font-medium font-poppins">
              FLAMES
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 max-w-fit mx-auto"
              htmlFor="yourName"
            >
              Your name
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center">
            <input
              className="shadow appearance-none border rounded w-full mx-5 sm:mx-0 py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="yourName"
              type="text"
              placeholder="Your name"
              value={name1}
              onChange={(e) => {
                setName1(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 max-w-fit mx-auto"
              htmlFor="crushName"
            >
              Crush name
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center">
            <input
              className="shadow appearance-none border rounded w-full mx-5 sm:mx-0 py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="crushName"
              type="text"
              placeholder="Crush name"
              value={name2}
              onChange={(e) => {
                setName2(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="md:w-1/3 pt-5 pb-10 md:pl-8">
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleClick}
              >
                Predict
              </button>
            </div>
          </div>
          <div className="w-full h-40 flex items-center justify-center">
            <div>
              <p className="text-3xl text-purple-500 font-medium font-poppins">
                {r}
              </p>
            </div>
          </div>
          <div className="md:w-1/3 pt-10 md:pl-10">
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
