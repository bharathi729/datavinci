import React, { useState } from 'react';
import Graph from './Graph'; // Assuming the Graph component is in a separate file
import Scorecard from './Scorecard';
import Counter from './Counter';
import Table from './Table';
import RatingScorecard from './RatingScorecard';
import "./Table.css";
// Dummy data for scorecards, graph, and table
const userRatingData = [
    { title: 'User Rating', value: 4.5 },
  ];



const graphData = [
  { date: '2023-06-01', value: 50 },
  { date: '2023-06-02', value: 100 },
  { date: '2023-06-03', value: 150 },
  { date: '2023-06-04', value: 200 },
  { date: '2023-06-05', value: 250 },
  { date: '2023-06-06', value: 300 },
];


const tableData = [
    { date: '2023-06-01', name: 'Item 1', dimension: 'Dimension A', value: 10 },
    { date: '2023-06-02', name: 'Item 2', dimension: 'Dimension B', value: 20 },
    { date: '2023-06-03', name: 'Item 3', dimension: 'Dimension A', value: 30 },
    { date: '2023-06-04', name: 'Item 4', dimension: 'Dimension B', value: 40 },
  ];
  


const Dashboard = () => {
  // State for date range filter
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  // State for dimension filter
  const [selectedDimension, setSelectedDimension] = useState('');

  // Update date range filter
  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  // Update dimension filter
  const handleDimensionChange = (e) => {
    setSelectedDimension(e.target.value);
  };

  // Filtered table data based on filters
  const filteredTableData = tableData.filter(
    (item) =>
      (dateRange.startDate === '' || dateRange.startDate <= item.date) &&
      (dateRange.endDate === '' || dateRange.endDate >= item.date) &&
      (selectedDimension === '' || selectedDimension === item.dimension)
  );

  
  return (
    <div>
     
      {/* Scorecards 2 */}
      <div className="scorecard">
        {userRatingData.map((scorecard) => (
          <RatingScorecard
            key={scorecard.title}
            title={scorecard.title}
            value={scorecard.value}
          />
        ))}
      </div>
      <div className='main'>
        {/* Scorecards */}
        <div className="scorecards">
          <Scorecard />
        </div>


        {/* Graph */}
        <div className="graph">
          <Graph data={graphData} />
        </div>
      </div>
      {/* Filters */}
      <div className='main-btm'>
      <div className="filters">
        <label>
          <b>Start Date:</b>
          <input
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateRangeChange}
          />
        </label>
        <label className='date'>
          <b>End Date:</b>
          <input
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateRangeChange}
          />
        </label>
        <label className='dim'>
          <b>Dimension:</b>
          <select value={selectedDimension} onChange={handleDimensionChange}>
            <option value="">All</option>
            <option value="Dimension A">Dimension A</option>
            <option value="Dimension B">Dimension B</option>
          </select>
        </label>
      </div>

      {/* <Table data={filteredTableData} /> */}

        <div className="table">
            <Table data={filteredTableData} />
        </div>
    </div>
      </div>
    )
}
export default Dashboard;