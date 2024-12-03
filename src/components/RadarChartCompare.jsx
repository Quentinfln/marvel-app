import PropTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';

const RadarChartCompare = ({ data }) => {
    // Calculate the maximum value for the domain
    const maxValue = Math.max(...data.flatMap(d => Object.values(d).slice(1)));

    return (
        <RadarChart
            cx={250}
            cy={225}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={0} domain={[0, maxValue]} />
            <Radar 
                name={data[0] && Object.keys(data[0])[1]}
                dataKey={data[0] && Object.keys(data[0])[1]}
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
            <Radar 
                name={data[0] && Object.keys(data[0])[2]}
                dataKey={data[0] && Object.keys(data[0])[2]}
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
            />
            <Tooltip />
            <Legend />
        </RadarChart>
    );
};

RadarChartCompare.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            [PropTypes.string]: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default RadarChartCompare;