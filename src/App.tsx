import Circle from "./Circle";
import styled from "styled-components";


const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`;

interface DummyProps {
    text: string;
    otherThingHere?: boolean;
}
const Dummy = ({text, otherThingHere}:DummyProps) => {
    return (
        <H1>{text}</H1>
    );
}

const App = () => {
  const onClick = (event:React.FormEvent<HTMLButtonElement>) => {

  }

  return (
      <div>
          <Container>
              <Dummy text={"Dummy Text"} />
            <form>
              <button onClick={onClick}>click me</button>
            </form>
          </Container>
      </div>
  );
}

export default App;
