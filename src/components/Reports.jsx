import React, { useState } from 'react';

const Reports = () => {
  const [month, setMonth] = useState('October'); // Default month for report

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-6 text-blue-900">Financial Reports</h2>

      {/* Report Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Filter Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Select Month</label>
            <select
              value={month}
              onChange={handleMonthChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              {/* Add more months as options */}
              <option value="October">October</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Select Category</label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option value="all">All Categories</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
              <option value="savings">Savings</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Summary for {month}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="text-lg">Total Income</h4>
            <p className="text-2xl font-bold">$5000</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h4 className="text-lg">Total Expenses</h4>
            <p className="text-2xl font-bold">$3000</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="text-lg">Savings</h4>
            <p className="text-2xl font-bold">$2000</p>
          </div>
        </div>
      </div>

      {/* Detailed Reports */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl mb-4">Detailed Reports</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-blue-900 text-white text-left">
              <th className="p-4">Date</th>
              <th className="p-4">Category</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b">October 10, 2024</td>
              <td className="p-4 border-b">Income</td>
              <td className="p-4 border-b">$1500</td>
              <td className="p-4 border-b">Freelance project payment</td>
            </tr>
            <tr>
              <td className="p-4 border-b">October 12, 2024</td>
              <td className="p-4 border-b">Expenses</td>
              <td className="p-4 border-b">$500</td>
              <td className="p-4 border-b">Groceries</td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
