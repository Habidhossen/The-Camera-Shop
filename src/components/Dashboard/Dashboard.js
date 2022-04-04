import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-10 container mx-auto mt-10 bg-white">
      <div>
        <h1 className="mb-6 text-blue-800 font-bold">Investment vs Revenue</h1>
        <BarChart
          width={500}
          height={400}
          data={data}
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
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <h1 className="mb-6 text-blue-800 font-bold">
          Investment vs Revenue vs Sell
        </h1>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
      </div>
      <div>
        <h1 className="mb-6 text-blue-800 font-bold">Pie Chart</h1>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="sell"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div>
        <h1 className="mb-6 text-blue-800 font-bold">Monthly wise sell</h1>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
