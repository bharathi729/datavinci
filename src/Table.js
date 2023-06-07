import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Dimension</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.dimension}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;


