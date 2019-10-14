import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }

    getColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      } 

    render() { 
        /* let dataset = {
                label: 'Liked and Total photos',
                data: [53, 67, 23, 12],
                backgroundColor: 'green'
        } */
        const {total, collections, likes} = this.props
        
        let dataSet = {
            labels: ['Likes', 'Total Photos', 'Collections'],
            datasets: [
                {
                    label: 'First',
                    data: [likes, total, collections],
                    backgroundColor: [ this.getColor(), this.getColor(), this.getColor()]
        
                }
            ]
        
        };
        return (<div>
            <Doughnut
            data={dataSet}
            options = { {
               /*  scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Color Value'
                          },
                        gridLines: {
                          display: false
                        },
                        ticks: {
                            beginAtZero:true,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number'
                          },
                        gridLines: {
                          display: true
                        },
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }, */
                maintainAspectRatio: false 
            }} 
            width={320}
            height={240}
        />
       </div>);
    }
}
 
export default Chart;