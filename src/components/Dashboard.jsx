import React from 'react';
import { FaMoneyBillWave, FaClipboardList, FaPiggyBank, FaChartPie, FaBell, FaFileAlt } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
// import '../styles/Dashboard.module.css';

// Sample data for the chart
const data = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
];

function Dashboard() {
  return (
    <div className="dashboard container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="Monthly Income" amount="$3000" icon={<FaMoneyBillWave />} />
        <Card title="Total Expenses" amount="$1500" icon={<FaClipboardList />} />
        <Card title="Savings Goals" amount="$500" icon={<FaPiggyBank />} />
        <Card title="Budget Remaining" amount="$1500" icon={<FaChartPie />} />
        <Card title="Notifications" amount="3 Alerts" icon={<FaBell />} />
        <Card title="Reports" amount="View Reports" icon={<FaFileAlt />} />
      </div>

      {/* Graphs Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Financial Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl mb-2">Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#3b82f6" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Card({ title, amount, icon }) {
  return (
    <div className="card bg-white shadow-md p-6 rounded-lg flex items-center">
      <div className="icon text-blue-600 text-3xl mr-4">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg">{amount}</p>
      </div>
    </div>
  );
}

export default Dashboard;
