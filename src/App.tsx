import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchInfo } from "./views";
import InfoCards from "views/InfoCards/InfoCards";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<SearchInfo />} />
          <Route path="/list" element={<SearchInfo />} />
          <Route path="/cards" element={<InfoCards />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
