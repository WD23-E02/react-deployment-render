import React, {useState, useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {Container, ToggleButton, MainText} from "./Styles";

import Navbar from "./Navbar";

const App = () => {
  const initialTheme = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Navbar />

      <Container>
        <ToggleButton onClick={toggleTheme}>
          😃
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </ToggleButton>

        <MainText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          odit?
        </MainText>
      </Container>
    </ThemeProvider>
  );
};

const lightTheme = {
  body: "#ffffff",
  text: "#333333",
  textBtn: "orange",
  toggleButton: "#333333",
  navbarBackground: "#f0f0f0",
  navbarText: "#333333",
};

const darkTheme = {
  body: "#333333",
  text: "#ffffff",
  textBtn: "black",
  toggleButton: "#ffffff",
  navbarBackground: "#222222",
  navbarText: "#ffffff",
};
export default App;
