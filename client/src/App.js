import { Routes, Route, Link } from "react-router-dom";
import HoaPage from "./pages/HoaPage";
import NewsPage from "./pages/NewsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home Page</Link>
          </li>
          <li>
            <Link to='/news'>News Page</Link>
          </li>
          <li>
            <Link to='/hoa'>Hoa Page</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/hoa' element={<HoaPage />} />
      </Routes>
    </>
  );
}

export default App;
