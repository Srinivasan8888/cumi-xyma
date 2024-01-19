import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Charts = () => {
  const chartContainerRef = useRef(null);

  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        label: "My Dataset",
        data: [10, 20, 15],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  
  useEffect(() => {
    

    const chartOptions = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
        y: {
          type: "linear",
          position: "left",
        },
      },
    };

    const chartContainer = chartContainerRef.current;
    console.log("Chart Container:", chartContainer);

    if (chartContainer) {
      // Check if the chart has already been initialized
      if (chartContainer.hasAttribute("data-chart-initialized")) {
        return;
      }

      const myChart = new Chart(chartContainer, {
        type: "line",
        data: chartData,
        options: chartOptions,
      });

      // Mark the container as initialized
      chartContainer.setAttribute("data-chart-initialized", "true");

      // Cleanup function (optional)
      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <div
      className="h-full"
      id="myChartContainer"
      ref={chartContainerRef}
      style={{
        width: "100%",
        height: "400px", // Set an appropriate height
      }}
    ></div>
  );
};

export default Charts;
