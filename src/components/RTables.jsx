import React from "react";

const RTables = () => {
  return (
    <div className="flex items-center justify-center min-h-[460px]">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
  );
};

export default RTables;
