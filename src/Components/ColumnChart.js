import React from 'react';
import ReactApexChart from 'react-apexcharts';

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
                        borderRadius: 6,
                        columnWidth: this.props.ColumnChart ? this.props.ColumnChart : '6px',
                        dataLabels: {
                            position:   'top',
                        },
                    },
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + '%';
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: this.props.colors,
                    },
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'top',
                    axisBorder: {
                        show: true,
                    },
                    axisTicks: {
                        show: true,
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
                            },
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: true,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
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

export default ColumnChart;
