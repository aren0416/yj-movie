import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "./components/detaill/Detail";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Search } from "./components/search/Search";
import { GlobalStyled } from "./components/styes/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
