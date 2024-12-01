import React, { useState } from "react";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [userNumber, setUserNumber] = useState("");
  const [diceImg, setDiceImg] = useState(1);
  const [warning, setWarning] = useState(false)
  const [rules, setRules] = useState(false)

  const handleSelectedNumber = (e) => {
    const currentValue = e.target.value;
    setUserNumber(currentValue);
    setWarning(false)
  };
  const changeImg = () => {
    if (!userNumber) {
      setWarning(true)
      return;
    }
    const randomImg = Math.round(Math.random() * 5) + 1
    console.log("randomImgIndex",randomImg)
    setDiceImg(randomImg);
    if (userNumber == diceImg) {
      setScore((prevScore) => prevScore + 1);
      setUserNumber('')
    } else {
      setScore((prevScore) => prevScore - 2);
      setUserNumber('')
    }
  };
  console.log(rules, Date.now())

  return (
    <div className="h-screen py-3 text-black">
        <p style={{visibility: warning? "" :"hidden"}} className="text-red-500 text- text-end mr-10 mb-2 font-semibold">You have not selected any Number</p>
      <div className="upper flex md:flex-row flex-col justify-between md:items-start items-center gap-4 px-10">
        <div className="score">
          <h1 className="md:text-6xl text-4xl font-semibold text-center">{score}</h1>
          <p className="text-2xl font-semibold">Total Score</p>
        </div>
        <div className="buttonsContainer flex flex-col gap-y-6 flex-wrap">
        
          <div className="buttons flex flex-wrap justify-between  gap-5">
            <button
              className="border border-gray-700 font-extrabold px-6 py- hover:bg-black hover:text-white"
              value={1}
              onClick={handleSelectedNumber}
              
            >
              1
            </button>
            <button
              className="border border-gray-700 font-extrabold px-6 py-4 hover:bg-black hover:text-white"
              value={2}
              onClick={handleSelectedNumber}
            >
              2
            </button>
            <button
              className="border border-gray-700 font-extrabold px-6 py-4 hover:bg-black hover:text-white"
              value={3}
              onClick={handleSelectedNumber}
            >
              3
            </button>
            <button
              className="border border-gray-700 font-extrabold px-6 py-4 hover:bg-black hover:text-white"
              value={4}
              onClick={handleSelectedNumber}
            >
              4
            </button>
            <button
              className="border border-gray-700 font-extrabold px-6 py-4 hover:bg-black hover:text-white"
              value={5}
              onClick={handleSelectedNumber}
            >
              5
            </button>
            <button
              className="border border-gray-700 font-extrabold px-6 py-4 hover:bg-black hover:text-white"
              value={6}
              onClick={handleSelectedNumber}
            >
              6
            </button>
          </div>
          <h2 className="text-xl font-bold md:self-end self-center">Select any number</h2>
        </div>
      </div>
      <div className="diceContainer flex flex-col justify-center items-center gap-y-6 ">
        <div className="dice">
          <img
          className="w-52"
            onClick={changeImg}
            src={`images/Dices/dice_${diceImg}.png`}
            alt=""
          />
          <p className="text-center font-semibold text-xl">
            Click on Dice to roll
          </p>
        </div>
        <div className="functionButtons flex flex-col gap-y-4">
          <button
            className="border border-black text-center px-12 py-2 rounded-md"
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
          <button className="bg-black text-white text-center px-12 py-2 rounded-md"
          onClick={()=> setRules((prevState)=> !prevState)}
          >
            {rules? "Hide Rules ⬆️" : "Show Rules ⬇️"}
          </button>
        </div>
        <div className={`rules  bg-[#FBF1F1] max-w-screen-sm p-4 ${rules? "": "hidden"}`}>
            <h1 className="font-bold text-xl mb-2">How to play dice game</h1>
            <ul className="font-semibold">
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>After click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
