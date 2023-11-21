import styled, { keyframes } from 'styled-components'

const Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;

const Wrapper =styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 60px;
  };
`;

/*
const animationBox = keyframes`
  from {
    color: tomato;
  }
  to {
    color: teal;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
  animation: ${animationBox};
`;

const Btn = styled.button`
  animation: ${animationBox} .5s infinite;
`;
*/
const Input = styled.input.attrs({required: true, maxLength: 10})`
  color: tomato;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <h1>Hello</h1>
      {/*<Box bgColor='teal'/>*/}
      {/*<Btn bgColor='tomato'>Log in</Btn>*/}
      {/*<Btn as ="a" bgColor='tomato'>Go home</Btn>*/}
      {/*<Circle/>*/}

      {/*<Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>*/}
    </Wrapper>
  );
}

export default App;
