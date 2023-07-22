import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Header setSearchQuery={setInputValue} />
          <main>
            <Routes>
              <Route path="/" element={<MovieList movieTitle={inputValue} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
