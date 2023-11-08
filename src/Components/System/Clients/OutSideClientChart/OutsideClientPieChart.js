import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css"
class OutsideClientPieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70,30],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                labels: [`داخلى  `],


                colors: ["#E40038", "#151A20"],
                stroke: {
                    show: false 
                },
                dataLabels: {
                    enabled: false
                },


                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    position: 'left',
                    offsetY: 0,
                    height: 230,
                }
            },


        };
    }




    render() {
        return (


            <div>
                <div class="chart-wrap ">
                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={"90%"} height={250} />
                    </div>
                </div>


            </div>)
    }
}
export default OutsideClientPieChart