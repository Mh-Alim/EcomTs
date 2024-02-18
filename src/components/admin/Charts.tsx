import React from "react";
import { Pie } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';

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
  PointElement,
  LineElement,
  Filler,
  


} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type BarChartPropsType = {
  horizontal?: boolean;
  dataset_text_1: string;
  dataset_text_2: string;
  text: string;
  labels: string[];
  data1: number[];
  data2: number[];
  bg1?: string;
  bg2?: string;
};
export const BarChart = ({
  horizontal = false,
  dataset_text_1,
  dataset_text_2,
  text,
  labels,
  data1,
  data2,
  bg1 = "rgba(255, 99, 132, 0.5)",
  bg2 = "rgba(53, 162, 235, 0.5)",
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
    datasets: dataset_text_2 ? [
      {
        label: dataset_text_1,
        data: data1,
        backgroundColor: bg1,
      },
      {
        label: dataset_text_2,
        data: data2,
        backgroundColor: bg2,
      },
    ] : [{
      label: dataset_text_1,
      data: data1,
      backgroundColor: bg1,
    }],
  };

  return <Bar options={options} data={data} />;
};

type DoughnutChartPropsType = {
  dataset: number[];
  bgColor: string[];
  legend: boolean;
  labels: string[];
  cutout?: number;
};
export const DoughnutChart = ({ labels, dataset,bgColor=["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],legend = true,cutout= 100}: DoughnutChartPropsType) => {
  const data: ChartData<"doughnut", number[], string> = {
    labels: labels,
    datasets: [
      {
        data: dataset,
        backgroundColor: bgColor,
        // borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 30,
        },
        display: legend
      },
    },
    cutout: cutout,
  };

  return <Doughnut data={data} options={options} />;
};





type PieChartPropsType = {
  labels: string[],
  dataSet: number[],
  bgColor: string[],
  borderColor: string[],
}
export const PieChart = ({labels,dataSet,bgColor,borderColor}:PieChartPropsType) => {
  

const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Votes",
      data: dataSet,
      backgroundColor: bgColor,
      borderColor:borderColor,
      borderWidth: 1,
    },
  ],

  };
  const options: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 30,
        },
        display: false,
      },
    },
    offset: [2,20,0]
    
  };
  return <Pie options={options}  data={data} />
}



type LineChartPropsType = {
  data: number[];
  label: string;
  bgColor: string;
  borderColor: string;
  labels?: string[];
}

export const LineChart = ({ data, label, bgColor, borderColor, labels }: LineChartPropsType) => {
  const options = {
    responsive: true,
    
    plugins: {
      
      legend: {
        position: 'top' as const,
        display : false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const lineChartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: label,
        data: data,
        borderColor: borderColor,
        backgroundColor: bgColor,
      },
    ],
  };


  return <Line options={options} data={lineChartData} />;
}