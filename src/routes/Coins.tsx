
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coins = () => {
  return (
    <>
      <Title>Coins</Title>
      <Outlet />
    </>
  )
}
export default Coins;