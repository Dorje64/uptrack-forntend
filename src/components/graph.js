import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';

// const data = [
//   { project: 'jan', update_counts: 3, },
//   { project: 'feb', update_counts: 4, },
//   { project: 'Mar', update_counts: 1, },
//   { project: 'Apr', update_counts: 2, },
//   { project: 'Jun', update_counts: 3, },
//   { project: 'May', update_counts: 0, },
// ];

const Graph = (data) => {
  return (
    <div className="graph card">
      <BarChart width={500} height={400} data={data.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 } } >
        <XAxis dataKey="project__name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f9f5f5" />
        <Bar type="monotone" dataKey="update" fill="#8884d8" yAxisId={0} />
      </BarChart>
    </div>
  );
}

export default Graph;
