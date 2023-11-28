import styled from "styled-components";
import {useState} from "react";

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string
}

const Container =styled.div<CircleProps>`
  width: 200px;
  height: 200px;  
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor}
`;

const Circle = ({bgColor, borderColor, text="default text"}: CircleProps) => {
    const [counter, setCounter] = useState(1);
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} text={text} >
            <p>{text}</p>
        </Container>
    )
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) =>  `Hello ${playerObj.name} you are ${playerObj.age} years old.`

sayHello({name: "nico", age: 12, });