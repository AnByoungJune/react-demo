import {createBrowserRouter} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Root from "./Root";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Coins />
      },
      {
        path: '/:coinId',
        element: <Coin />,
        children: [
          {
            path: 'chart',
            element: <Chart />,
          },
          {
            path: 'price',
            element: <Price />,
          }
        ]
      }
    ]
  }
])

export default router;