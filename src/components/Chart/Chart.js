import ChartBar from './ChartBar.js'
import './Chart.css'

const Chart = (props) => {
    let dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        />)}
    </div>
}

export default Chart;