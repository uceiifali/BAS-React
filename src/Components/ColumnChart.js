import ReactApexChart from "react-apexcharts";
import React from "react";
class ColumnChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Inflation',
                data: this.props.data
            }],

     

       
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                colors: ['#FFF'],   
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: this.props.colors
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '6px', // Change the column width as needed, e.g., '50%', 50, etc.
                        borderRadius: "10px",
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                // Rest of your options...

                xaxis: {

                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: this.props.colors[0],
                                colorTo: this.props.colors[0],
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },

            },



        };
    }
    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200} />
            </div>


        );
    }

}






export default ColumnChart