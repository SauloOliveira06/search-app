import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchInfo } from "./views";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
