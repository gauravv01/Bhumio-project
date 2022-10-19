import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import './Statistics.css';



const LineChart = () => {
  const IncomingData =useSelector(state=>state.dataFetchSlice.dataArray);
  let labels = [];
  let Budgetdata=[];
  IncomingData.forEach(element => {labels.push(element.id) ;
    Budgetdata.push(element.Budget) 
  });
  
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Project Budget",
        borderColor: "rgb(255, 99, 132)",
        data: Budgetdata,
      },
    ],
  };
  const options= {
    plugins: { title: {
      display: true,
      text: 'Budget (in Cr.)',position:'left'
  },
        subtitle: {
            display: true,
            text: 'Project-ID', position:'bottom',padding:{bottom:10},font:{weight: 'bold'}
        }
        
    }
}
  return (
    <div className="Chart"  >
      <Line data={data}  options={options} />
    </div>
  );
};

export default LineChart;