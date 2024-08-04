import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import { IoGitCommitOutline } from 'react-icons/io5';
import './components/SelectOption/index';
import SelectOption from './components/SelectOption/index';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';

import './App.css';

function App() {
  const data = [
    { label: 'Group A', value: 1484, color: '#FA7E7E' },
    { label: 'Group B', value: 1175, color: '#2CDED5' },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  const datas = [
    { name: '6/30/24 - 7/6/24', uv: 1.4, pv: 1.6, amt: 2400 },
    { name: '7/7/24 - 7/13/24', uv: 0.8, pv: 0.8, amt: 2400 },
    { name: '7/21/24 - 7/27/24', uv: 0.5, pv: 0.8, amt: 2400 },
  ];

  return (
    <div className="App">
      <div className="options-container">
        <p className="options-item">Dashboard</p>
        <p>Inventory</p>
        <p>Order</p>
        <p>Returns</p>
        <p>Customers</p>
        <p>Shipping</p>
        <p>Channel</p>
        <p>Integrations</p>
        <SelectOption />
        <SelectOption />
        <SelectOption />
      </div>

      <div className="main-container">
        <div className="nav-container">
          <p className="nav-heading">Dashboard</p>
        </div>

        <div className="dashboard-container">
          <div className="dashboard-container-left">
            <div className="chart-heading">
              <p className="heading">Sales Vs Orders</p>
              <IoInformationCircleOutline className="icons" />
            </div>

            <div className="chart-container-left">
              <div className="line-heading">
                <div className="line-icons first">
                  <IoGitCommitOutline className="line" />
                  <p className="first">Orders</p>
                </div>
                <div className="line-icons second">
                  <IoGitCommitOutline className="line" />
                  <p className="second">Sales</p>
                </div>
              </div>

              <LineChart
                width={600}
                height={300}
                data={datas}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#47A5A8" />
                <Line type="monotone" dataKey="pv" stroke="#F19336" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis
                  domain={[0, 1.6]}
                  ticks={[0, 0.4, 0.8, 1.2, 1.6]}
                  tickFormatter={(tick) => `${tick}k`}
                />
                <Tooltip />
              </LineChart>
            </div>
          </div>

          <div className="dashboard-container-right">
            <div className="chart-heading">
              <p className="heading">Portion of Sales</p>
              <IoInformationCircleOutline className="icons" />
            </div>

            <div className="pie-chart">
              <PieChart
                series={[
                  {
                    outerRadius: 80,
                    data,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontSize: 14,
                  },
                }}
                {...sizing}
              />
              <div className="pie-content">
                <div className="pit-element">
                  <FaCircle className="circle-1" />
                  <p>WooCommerce Store</p>
                </div>
                <div className="pit-element">
                  <FaCircle className="circle-2" />
                  <p>Shopify Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
