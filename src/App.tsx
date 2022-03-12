import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Explore from "./pages/Explore";
import Home from "./pages/Home";

const theme = {
  main: "#111",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
