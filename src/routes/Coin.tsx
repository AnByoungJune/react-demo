import {useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";


const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`
const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteParams {
  coinId:string
}

interface RouteState {
  state: {
    id: string;
    name: string;
    rank: number;
  }
}

const Coin = () => {
  const [loading, setloading] = useState(true);
  const {coinId} = useParams() as unknown as RouteParams;
  const {state} = useLocation() as RouteState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (async() => {
      /*
      const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
      const json = await response.json();
      */
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, [])
  console.log(state);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : null }
    </Container>
  )
}

export default Coin;