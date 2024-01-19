import React, { useEffect, useRef } from "react";
import { FaTemperatureLow, FaSignal } from "react-icons/fa";
import { PiBatteryVerticalFullFill } from "react-icons/pi";
// import Chart from "chart.js/auto";
import Charts from "./Charts";
import "./css/card.css";

const Card = () => {
//   const chartContainerRef = useRef(null);

//   useEffect(() => {

//     const chartData = {
//       labels: ["Label 1", "Label 2", "Label 3"],
//       datasets: [
//         {
//           label: "My Dataset",
//           data: [10, 20, 15],
//           borderColor: "rgba(75, 192, 192, 1)",
//           borderWidth: 1,
//           fill: false,
//         },
//       ],
//     };

//     // Options for the chart
//     const chartOptions = {
//         scales: {
//           x: {
//             type: 'linear',
//             position: 'bottom',
//           },
//           y: {
//             type: 'linear',
//             position: 'left',
//           },
//         },
//       };
      

//     // Get the reference to the div element using the ref
//     const chartContainer = chartContainerRef.current;
//     console.log("Chart Container:", chartContainer);

//     // Function to initialize the chart
//     const initializeChart = () => {
//         if (chartContainer) {
//             const myChart = new Chart(chartContainer, {
//               type: "line",
//               data: chartData,
//               options: chartOptions,
//             });
//           }
//     };

//     // Delay chart initialization for 100 milliseconds
//     const timeoutId = setTimeout(initializeChart, 100);

//     // Cleanup function to clear the timeout on unmount
//     return () => clearTimeout(timeoutId);
//   }, []);

  return (
    <div style={{ width: "100%", paddingLeft: "110px" }}>
      <div className="grid gap-4 items-stretch grid-cols-2">
        <div className="h-full">01</div>

        <div className="h-full">
          <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full">
              <div className="bg-white p-5 flex justify-center items-center">
                <div className="sm:flex sm:items-start">
                  <div className="mt-4 sm:mt-0 sm:ml-4 position: absolute left-0 top-16">
                    <FaTemperatureLow className=" text-5xl" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="mt-4">
                    <h3 className="text-3xl leading-6 font-bold text-black-400">
                      Thickness
                    </h3>
                    <p className="text-3xl font-bold text-black">98.99%</p>
                  </div>
                  <div className="sm:flex sm:items-end">
                    <div className="mt-4 sm:mt-0 sm:ml-4 position: absolute right-4 top-16">
                      <p className="text-3xl font-bold text-black">98/14 mm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex sm:space-x-4">
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                      <FaTemperatureLow className="text-5xl" />
                    </div>
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Device Temp
                      </h3>
                      <p className="text-3xl font-bold text-black">23</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                      <FaSignal className="text-5xl" />
                    </div>
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Signal Strength
                      </h3>
                      <p className="text-3xl font-bold text-black">27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                      <PiBatteryVerticalFullFill className="text-5xl" />
                    </div>
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                      <h3 className="text-sm leading-6 font-medium text-gray-400">
                        Battery Level
                      </h3>
                      <p className="text-3xl font-bold text-black">31%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full">
          <div className="flex items-center justify-center min-h-[450px]">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Thickness
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Battery Level
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Signal Strength
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">15.32</td>
                      <td className="py-4 px-6">31%</td>
                      <td className="py-4 px-6">27</td>
                      <td className="py-4 px-6">jan 11, 2024 at 5:50 PM</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">15.32</td>
                      <td className="py-4 px-6">31%</td>
                      <td className="py-4 px-6">27</td>
                      <td className="py-4 px-6">jan 11, 2024 at 5:50 PM</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">15.32</td>
                      <td className="py-4 px-6">31%</td>
                      <td className="py-4 px-6">27</td>
                      <td className="py-4 px-6">jan 11, 2024 at 5:50 PM</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">15.32</td>
                      <td className="py-4 px-6">31%</td>
                      <td className="py-4 px-6">27</td>
                      <td className="py-4 px-6">jan 11, 2024 at 5:50 PM</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="py-4 px-6">15.32</td>
                      <td className="py-4 px-6">31%</td>
                      <td className="py-4 px-6">27</td>
                      <td className="py-4 px-6">jan 11, 2024 at 5:50 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="h-full"
          id="myChartContainer"
          ref={chartContainerRef}
        ></div> */}
        <div><Charts/></div>
      </div>
    </div>
  );
};

export default Card;
