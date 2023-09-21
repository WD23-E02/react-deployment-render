import {useContext} from "react";
import {ThemeContext} from "./Context";
import styled from "styled-components";

const Div = styled.div`
  color: blue;
  background-color: ${(props) => props.bgc};
`;
const Button = styled.button`
  background-color: ${(props) => props.bg};
`;
const Div2 = styled.div`
  width: 600px;
  background-color: aqua;

  color: ${(props) => props.cl};
`;
function ThemeComponent() {
  const {state, dispatch} = useContext(ThemeContext);

  const style = {
    color: state.isDark ? "blue" : "red",
    backgroundColor: state.isDark ? "black" : "light",
  };

  return (
    <div style={style}>
      <Div bgc={state.isDark ? "Pink" : "green"}>
        <Button
          onClick={() => dispatch({type: "DARK"})}
          bg={state.isDark ? "#ca3b10e1" : "#e345ff"}
        >
          Change Theme
        </Button>
      </Div>{" "}
      <Div2 cl={state.isDark ? "red" : "white"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores fugit
        dignissimos ullam dolor minima sed quae ipsum asperiores illo nisi?
      </Div2>
    </div>
  );
}

export default ThemeComponent;
