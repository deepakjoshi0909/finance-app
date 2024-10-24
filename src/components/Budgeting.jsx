// import '../styles/Budgeting.module.css';

function Budgeting() {
  return (
    <div className="budgeting container p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-4 text-blue-900">Budgeting Tools</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-semibold">Income</label>
          <input
            type="number"
            placeholder="Enter your income"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Rent</label>
          <input
            type="number"
            placeholder="Enter rent budget"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Food</label>
          <input
            type="number"
            placeholder="Enter food budget"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Entertainment</label>
          <input
            type="number"
            placeholder="Enter entertainment budget"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Utilities</label>
          <input
            type="number"
            placeholder="Enter utilities budget"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Transportation</label>
          <input
            type="number"
            placeholder="Enter transportation budget"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button className="col-span-2 mt-4 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition duration-300">
          Save Budget
        </button>
      </form>

      {/* Summary Section */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Budget Summary</h3>
        <div className="flex justify-between">
          <span>Total Income:</span>
          <span className="font-semibold">$3000</span>
        </div>
        <div className="flex justify-between">
          <span>Total Expenses:</span>
          <span className="font-semibold">$1500</span>
        </div>
        <div className="flex justify-between">
          <span>Remaining Balance:</span>
          <span className="font-semibold text-green-600">$1500</span>
        </div>
      </div>
    </div>
  );
}

export default Budgeting;
