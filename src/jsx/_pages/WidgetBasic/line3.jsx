import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart3 extends Component {
   render() {
      const data = {
         labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
         ],
         datasets: [
            {
               label: "My First dataset",
               data: [46, 50, 56, 48, 46, 42, 60,48],
               
               fill: true,               
               backgroundColor: this.props.color
                  ? this.props.color
                  : this.props.color
                  ? this.props.color
                  : "#45FCC1",
               borderColor: this.props.color
                  ? this.props.color
                  : this.props.color
                  ? this.props.color
                  : "#45FCC1",
               borderWidth: 2,
               strokeColor: this.props.color ? this.props.color : "#45FCC1",
               capBezierPoints: !0,
               pointColor: "#fff",
               pointBorderColor: "#fff",
               pointBackgroundColor: this.props.color
                  ? this.props.color
                  : "#45FCC1",
               pointBorderWidth: 3,
               pointRadius: 0,
               pointHoverBackgroundColor: "#FFF",
               pointHoverBorderColor: this.props.border
                  ? this.props.border
                  : this.props.color
                  ? this.props.color
                  : "#45FCC1",
               pointHoverRadius: 0,
            },
         ],
      };

      const options = {
         responsive: true,
         maintainAspectRatio: false,
         tooltips: {
            enabled: false,
         },
         plugins: {
            legend: {
               display: false,
               labels: {
                  usePointStyle: false,
               },
            },
         },
         scales: {
            x: 
               {
                  display: false,
                  grid: {
                     display: false,
                     drawBorder: false,
                  },
                  scaleLabel: {
                     display: false,
                     labelString: "Month",
                  },
               },
            
            y: 
               {
                  display: false,
                  grid: {
                     display: false,
                     drawBorder: false,
                  },
                  scaleLabel: {
                     display: true,
                     labelString: "Value",
                  },
               },
            
         },
         title: {
            display: false,
         },
      };
      return (
         <Line
            data={data}
            options={options}
            height={this.props.height ? this.props.height : 300}
         />
      );
   }
}

export default LineChart3;