import React from "react";

import Charts from "./Charts";
import Rcards from "./Rcards";
import "./css/card.css";
import RTables from "./RTables";

const Card = () => {
  return (
    <div style={{ width: "100%", paddingLeft: "110px" }}>
      <div className="grid gap-4 items-stretch grid-cols-2">
        <div className="h-full">01</div>

        <div className="h-full">
          <Rcards />
          
          {/* <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full">
              <div className="bg-white p-5 flex flex-col sm:flex-row justify-center items-center">
                <div className="sm:mr-4 mb-4 sm:mb-0">
                  <FaTemperatureLow className="text-5xl" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="mt-4">
                    <h3 className="text-3xl leading-6 font-bold text-black-400">
                      Thickness
                    </h3>
                    <p className="text-3xl font-bold text-black">98.99%</p>
                  </div>
                  <div className="sm:flex sm:items-end">
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                      <p className="text-3xl font-bold text-black">98/14 mm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex sm:flex-wrap">
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 sm:mx-2">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-4 sm:mt-0 sm:mr-4">
                      <FaTemperatureLow className="text-5xl" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Device Temp
                      </h3>
                      <p className="text-3xl font-bold text-black">23</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 sm:mx-2">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-4 sm:mt-0 sm:mr-4">
                      <FaSignal className="text-5xl" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Signal Strength
                      </h3>
                      <p className="text-3xl font-bold text-black">27</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 sm:mx-2">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-4 sm:mt-0 sm:mr-4">
                      <PiBatteryVerticalFullFill className="text-5xl" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Battery Level
                      </h3>
                      <p className="text-3xl font-bold text-black">31%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>

        <div className="h-full">
          <RTables />
        </div>
        <div>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Card;
