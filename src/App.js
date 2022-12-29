import { GlobalState } from "./contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./routes/Router";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
