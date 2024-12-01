import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen text-black flex justify-center items-center">
      <div className="hero flex md:flex-row flex-col">
        <div className="img">
          <img src="/images/dices 1.png" alt="" />
        </div>
        <div className="title flex flex-col justify-center items-center gap-y-6">
          <h1 className="md:text-8xl text-6xl font-bold">DICE GAME</h1>
          <Link
          to="/game"
          >
            <button className="self-end bg-black text-white text-center px-12 py-2 rounded-md">
              Play Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
