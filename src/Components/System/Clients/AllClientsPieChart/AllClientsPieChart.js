import React from "react";
import ReactApexChart from "react-apexcharts";

class AllClientsPieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70, 30],
            options: {
                chart: {
                    width: 500,
                    type: 'donut',
                },
                labels: [`داخلى  `, ` خارجى `],


                colors: ["#E40038", "#EFAA20"],
                stroke: {
                    show: false // Set this to false to remove the border of the donut segments
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
                <div class="chart-wrap">
                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut"   width={400} />
                    </div>
                </div>


            </div>)
    }
}
export default AllClientsPieChart