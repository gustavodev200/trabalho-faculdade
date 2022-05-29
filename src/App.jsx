import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import DadosGlobais from "./pages/DadosGlobais";

function App() {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dados-us" element={<DadosGlobais />} />
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
