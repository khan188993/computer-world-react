import React from 'react'
import { LineChart, Line,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css'
import ChartData from '../../fakeData/chartData'


const Dashboard = () => {
    // console.log(ChartData);


    return (
        <section className="contact py-60" id="contact">
        <h1 className="section-heading">Chart</h1>
        <div className="container">
            <div className="row">
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={ChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="review" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
                <div className="single-chart">
                <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={ChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
                </div>
                <div className="single-box">
                    <i className="fas fa-home"></i>
                    <h3>Visit Office </h3>
                    <span>72/1 S K Das Road, Gandaria, Puran Dhaka Bangladesh</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Dashboard
