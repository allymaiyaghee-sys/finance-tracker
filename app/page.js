import Link from 'next/link';

// Dummy data humare customers ka
const dummyCustomers = [
  { id: 1, name: 'Ramesh Kumar', amount: 50000, rate: 3, date: '2026-01-10' },
  { id: 2, name: 'Suresh Singh', amount: 100000, rate: 4, date: '2026-02-15' },
  { id: 3, name: 'Amit Sharma', amount: 30000, rate: 5, date: '2026-03-01' },
];

// YEH LINE SABSE ZAROORI HAI: "export default" hona hi chahiye tabhi Next.js ise page manega
export default function Dashboard() {
  return (
    <div className="space-y-6 px-2 sm:px-4 py-4 text-slate-100">

      {/* Top Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          {/* White background par ekdum saaf aur premium look */}
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Dashboard <span className="text-[#d97706] drop-shadow-sm">Summary</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Track your investment portfolio and monthly interest growth.
          </p>
        </div>

      </div>

      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#1e1b4b] border border-slate-800 rounded-2xl p-5 shadow-md">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Active Capital</p>
          <p className="text-2xl sm:text-3xl font-black text-white mt-2">₹ 1,80,000</p>
        </div>
        <div className="bg-[#1e1b4b] border border-slate-800 rounded-2xl p-5 shadow-md">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">All Customers</p>
          <p className="text-2xl sm:text-3xl font-black text-[#fbbf24] mt-2">03</p>
        </div>
        <div className="bg-[#1e1b4b] border border-slate-800 rounded-2xl p-5 shadow-md sm:col-span-2 lg:col-span-1">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Monthly Interest Earnings (Profit)</p>
          <p className="text-2xl sm:text-3xl font-black text-emerald-400 mt-2">₹ 7,000</p>
        </div>
      </div>

      {/* Customers List Section Table */}
      <div className="bg-[#1e1b4b] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800">
          <h2 className="text-lg font-bold text-white">Active Customers List</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Interest Rate</th>
                <th className="px-6 py-4">Start Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {dummyCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">{c.name}</td>
                  <td className="px-6 py-4 font-bold text-slate-100">₹ {c.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-800 text-[#fbbf24] px-2.5 py-1 rounded-md font-bold text-xs">
                      {c.rate}% Monthly
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
