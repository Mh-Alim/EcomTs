import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type BarChartPropsType = {
  horizontal?: boolean;
  dataset_text_1: string;
  dataset_text_2: string;
  text: string;
  labels: string[];
  data1: number[];
  data2: number[];
};
export const BarChart = ({
  horizontal = false,
  dataset_text_1,
  dataset_text_2,
  text,
  labels,
  data1,
  data2,
}: BarChartPropsType) => {
  const options: ChartOptions<"bar"> = {
    indexAxis: `${horizontal ? "y" : "x"}` as const,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: text,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: dataset_text_1,
        data: data1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: dataset_text_2,
        data: data2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};


type DoughnutChartPropsType = {
  dataset: number[],

}
export const DoughnutChart = ({dataset}:DoughnutChartPropsType) => {
  const data: ChartData<"doughnut",number[],string> = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Total User: ",
        data: dataset,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 30
        }
      },
    },
    cutout: 100,
 
  }

  return <Doughnut data={data} options={options} />;
};
