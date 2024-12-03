import React from 'react';
import { render } from '@testing-library/react';
import RadarChartCompare from './RadarChartCompare';

describe('RadarChartCompare', () => {
    const mockData = [
        { name: 'Metric 1', value1: 4, value2: 7 },
        { name: 'Metric 2', value1: 6, value2: 3 },
        { name: 'Metric 3', value1: 8, value2: 5 },
    ];

    it('renders without crashing', () => {
        render(<RadarChartCompare data={mockData} />);
    });

    it('renders the correct number of Radar components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const radarElements = container.querySelectorAll('.recharts-radar');
        expect(radarElements.length).toBe(2);
    });

    it('renders the correct number of PolarAngleAxis components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const polarAngleAxisElements = container.querySelectorAll('.recharts-polar-angle-axis');
        expect(polarAngleAxisElements.length).toBe(1);
    });

    it('renders the correct number of PolarRadiusAxis components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const polarRadiusAxisElements = container.querySelectorAll('.recharts-polar-radius-axis');
        expect(polarRadiusAxisElements.length).toBe(1);
    });

    it('renders the correct number of Tooltip components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const tooltipElements = container.querySelectorAll('.recharts-tooltip-wrapper');
        expect(tooltipElements.length).toBe(1);
    });

    it('renders the correct number of Legend components', () => {
        const { container } = render(<RadarChartCompare data={mockData} />);
        const legendElements = container.querySelectorAll('.recharts-legend-wrapper');
        expect(legendElements.length).toBe(1);
    });
});