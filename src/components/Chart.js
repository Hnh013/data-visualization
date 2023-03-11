import React from "react"
import ReactEcharts from "echarts-for-react";

const Chart = (props) => {

    // getting values from parent component via props
    const chartOptions = {
        color: props.color,
        grid: props.grid,
        xAxis: props.xAxis,
        yAxis: props.yAxis,
        series: props.series,
        title: props.title
    }

    return (
        <div>
            <ReactEcharts option={chartOptions} />
        </div>
    )
};

export default Chart;