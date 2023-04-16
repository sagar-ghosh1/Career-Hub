import React from 'react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const data = [
    {
      "name": "Assignment 1",
      "mark": 60,
      "pv": 60,
      "total": 60
    },
    {
      "name": "Assignment 2",
      "mark": 60,
      "pv": 60,
      "total": 60
    },
    {
      "name": "Assignment 3",
      "mark": 60,
      "pv": 60,
      "total": 60
    },
    {
      "name": "Assignment 4",
      "mark": 55,
      "pv": 55,
      "total": 60
    },
    {
      "name": "Assignment 5",
      "mark": 58,
      "pv": 58,
      "total": 60
    },
    {
      "name": "Assignment 6",
      "mark": 60,
      "pv": 60,
      "total": 60
    },
    {
      "name": "Assignment 7",
      "mark": 60,
      "pv": 60,
      "total": 60
    }
  ]

  return (
    <div className='flex h-[calc(100vh-132px)] items-center justify-center'>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <ComposedChart width={500} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="pv" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="total" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
      </ComposedChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Statistics;