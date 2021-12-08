import { useContext, useReducer, createContext } from "react";
const State = createContext();
const StateValue = ({ reducer, initialState, children }) => (
  <State.Provider value={useReducer(reducer, initialState)}>
    {children}
  </State.Provider>
);
const useStateValue = () => useContext(State);
export default useStateValue;
export { StateValue };
