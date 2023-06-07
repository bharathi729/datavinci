import React from 'react';

const Graph = ({ data }) => {
  // Assuming data is an array of objects with 'date' and 'value' properties

  // Convert dates to human-readable format (e.g., 'Jun 1')
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="graph">
      <h2>Graph</h2>
      <svg width="400" height="300">
        {/* X-axis */}
        <line x1="50" y1="250" x2="350" y2="250" stroke="black" strokeWidth="1" />
        {data.map((entry, index) => (
          <g key={index}>
            {/* X-axis labels */}
            <text x={50 + index * 50} y="275" textAnchor="middle" fontSize="10">
              {formatDate(entry.date)}
            </text>

            {/* Bars representing values */}
            <rect
              x={50 + index * 50}
              y={250 - entry.value}
              width="20"
              height={entry.value}
              fill="blue"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Graph;
