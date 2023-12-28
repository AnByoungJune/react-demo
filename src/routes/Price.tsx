import {useOutletContext, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
  priceData: PriceData;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
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

const PriceContainer = styled.div`
  padding: 0px 2rem;
  max-width: 30rem;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;
const MaxPriceBox = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  padding: 20px 10px;
  border-radius: 30px;
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    font-size: 20px;
    font-weight: bold;
    &:first-child {
      margin-bottom: 10px;
    }
  }
`;


const Price = () => {
  const { coinId, priceData } = useOutletContext<PriceProps>();
  console.log(priceData);


  return (
    <PriceContainer>
      <MaxPriceBox>
        <span>오늘의 {coinId.toUpperCase()} 가격</span>
        <span>${priceData?.quotes.USD.price.toFixed(3)}</span>
      </MaxPriceBox>
    </PriceContainer>
  );
}
export default Price;