import React from "react";
import Vid from "../assets/video.mp4";
import { authenticate } from './auth';


const Body = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={Vid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4">
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-3/4 px-5 py-2 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-city"
            >
              Transaction Address
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Trasaction Address"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 py-2 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-state"
            >
              Coin
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Ethereum</option>
                <option>Bitcoin</option>
                <option>Solana</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-3/4 px-3 py-2 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-city"
            >
              Wallet Address
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Trasaction Address"
            />
          </div>
        </div>
        <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
      </div>
      
    </div>
  );
};

export default Body;
