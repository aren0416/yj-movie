import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "./components/detaill/Detail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Search } from "./components/search/Search";
import { GlobalStyled } from "./components/styes/GlobalStyled";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
