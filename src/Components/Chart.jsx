import React from 'react';
import Close from "@material-ui/icons/Close"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
    const data = [
      {
        name: "2016",
        Salary: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "2017",
        Salary: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "2018",
        Salary: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "2019",
        Salary: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "2020",
        Salary: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "2021",
        Salary: 2390,
        pv: 3800,
        amt: 2500,
      }
    ];

    return (
      <div className="chart">
        <div className="exit">
          <Close />
        </div>

        <div className="chart-elements">
          <p>How much an average person earn per year?</p>
          <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Salary" fill="#c7290d" />
          </BarChart>
        </div>
      </div>
    );
}
