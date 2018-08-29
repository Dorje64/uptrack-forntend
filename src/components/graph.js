import React, { Component } from 'react';
import {
LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';

const data = [
  { month: 'jan', leave_count: 3, rejected_count: 1, accepted_leave: 1 },
  { month: 'feb', leave_count: 4, rejected_count: 1, accepted_leave: 1 },
  { month: 'Mar', leave_count: 1, rejected_count: 0, accepted_leave: 1 },
  { month: 'Apr', leave_count: 2, rejected_count: 1, accepted_leave: 1 },
  { month: 'Jun', leave_count: 3, rejected_count: 1, accepted_leave: 2 },
  { month: 'May', leave_count: 0, rejected_count: 0, accepted_leave: 0 },
  { month: 'Aug', leave_count: 4, rejected_count: 2, accepted_leave: 1 },
  { month: 'Jul', leave_count: 1, rejected_count: 1, accepted_leave: 1 },
  { month: 'Sept', leave_count: 1, rejected_count: 0, accepted_leave: 1 },
  { month: 'Oct', leave_count: 0, rejected_count: 0, accepted_leave: 1 },
  { month: 'Nov', leave_count: 3, rejected_count: 3, accepted_leave: 0 },
  { month: 'Dec', leave_count: 1, rejected_count: 0, accepted_leave: 1}
];

const Graph = () => (
  <div className="graph card">
    <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
      <XAxis dataKey="month" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="leave_count" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="rejected_count" stroke="#387908" yAxisId={1} />
    </LineChart>
  </div>
)

export default Graph;
