import {useOutletContext} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";
interface ChartProps {
  coinId: string
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = () => {
  const {coinId} = useOutletContext<ChartProps>();
  console.log('111111', coinId);
  const {isLoading, data} = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId))
  return <div>
    {isLoading ? (
      "Loading chart..."
    ) : (
      <ApexChart
        type="line"
        series={[
          {
            name: "price",
            data: data?.map((price) => price.close)
          }
        ]}
        options={{
          theme: {
            mode: "dark"
          },
          chart: {
            toolbar:{
              show: true
            },
            height: 500,
            width: 500,
            background: "transparent"
          },
          stroke:{
            curve: "smooth",
            width: 4
          },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: ["#0be881"],
              stops: [0, 100]
            }
          },
          colors: ["#0fbcf9"],
          yaxis: { show: false },
          xaxis: {
            type: "datetime",
            categories: data?.map((date) => date.time_close),
            labels: {
              show: true,
              datetimeFormatter: {
                year: 'yyyy',
                month: 'MMM \'yy',
                day: 'dd MMM',
                hour: 'HH:mm'
              }
            },
            axisTicks: { show: false },
            axisBorder: { show: false },
          },
          tooltip: {
            y: {
              formatter: (value) => `$ ${value.toFixed(3)}`
            }
          }
        }}
      />
    )}
  </div>;
}

export default Chart;