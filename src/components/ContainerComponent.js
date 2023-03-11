import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { chart1, chart2 } from '../utils/chartValues';

const ContainerComponent = () => {

    //maintaining single state for multiple chart variables
    const [charts, setCharts] = useState({ bar: {}, scatter: {} });

    //assigning chart data to variables when component renders
    useEffect(() => {
        setCharts({ bar: chart1, scatter: chart2 });
    }, []);

    return (
        <div>
            <Chart color={charts.bar.color} grid={charts.bar.grid} xAxis={charts.bar.xAxis} yAxis={charts.bar.yAxis} series={[charts.bar.series]} title={charts.bar.title} />
            <Chart color={charts.scatter.color} grid={charts.scatter.grid} xAxis={charts.scatter.xAxis} yAxis={charts.scatter.yAxis} series={[charts.scatter.series]} title={charts.scatter.title} />
        </div>
    )
};

export default ContainerComponent;