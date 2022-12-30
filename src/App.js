import Home from "./sections/Home";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
