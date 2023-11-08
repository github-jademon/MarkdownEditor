import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, NotFound } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app-container container">
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
