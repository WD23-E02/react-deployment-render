import styled from "styled-components";
// good morning guys , how's it going?
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  height: 100vh;
  background-color: ${({theme}) => theme.body};
  transition: background-color 0.3s;
`;

export const ToggleButton = styled.button`
  background-color: ${({theme}) => theme.toggleButton};
  color: ${({theme}) => theme.textBtn};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;

  cursor: pointer;
`;

export const MainText = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${({theme}) => theme.text};
  text-align: center;
  display: block;
`;

// its just a common convention
