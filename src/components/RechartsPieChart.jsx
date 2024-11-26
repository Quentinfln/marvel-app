import PropTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, Legend } from 'recharts';
import { prepareData } from './chart-utils';

const RechartsRadarChart = ({ data }) => {
    // Préparation des données pour le graphique radar
    let transformedData = prepareData(data);

    return (
        <RadarChart
            cx={150}
            cy={150}
            outerRadius={100}
            width={300}
            height={300}
            data={transformedData}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar 
                name="Stats"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
            <Tooltip />
            <Legend />
        </RadarChart>
    );
};

RechartsRadarChart.propTypes = {
    data: PropTypes.shape({
        force: PropTypes.number,
        intelligence: PropTypes.number,
        energy: PropTypes.number,
        speed: PropTypes.number,
        durability: PropTypes.number,
        fighting: PropTypes.number,
    }),
};

export default RechartsRadarChart;
