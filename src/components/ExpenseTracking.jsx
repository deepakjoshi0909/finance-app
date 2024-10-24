import React, { useState } from 'react';

const ExpenseTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expenseName || !expenseAmount) return; // Prevent empty submissions

    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    setExpenses([...expenses, newExpense]);
    setExpenseName('');
    setExpenseAmount('');
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-4 text-blue-900">Expense Tracking</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl mb-4">Add New Expense</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Expense Name</label>
            <input
              type="text"
              placeholder="Enter expense name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Add Expense
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl mb-4">Your Expenses</h3>
        {expenses.length === 0 ? (
          <p>No expenses recorded yet.</p>
        ) : (
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <li key={expense.id} className="flex justify-between border-b py-2">
                <span>{expense.name}</span>
                <span>${expense.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl mb-2">Total Expenses</h3>
        <p className="text-2xl font-semibold text-green-600">${totalExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseTracking;
