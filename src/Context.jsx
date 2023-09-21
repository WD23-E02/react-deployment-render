import {useReducer} from "react";
import {createContext} from "react";

export const ThemeContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        isDark: !state.isDark,
      };

    default:
      return state;
  }
};
//? ending of reducer

export default function ThemeProvider({children}) {
  const initialState = {isDark: false};

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}
