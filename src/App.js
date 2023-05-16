import React from "react";
import { Search } from "./components/search/Search";
import { Random } from "./components/random/Random";
import { Layout } from "./layout/Layout";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <div className="main">
        <div className="searchContainer">
          <Search />
        </div>
        <Random />
      </div>
    </Layout>
  );
};

export default App;
