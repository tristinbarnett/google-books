import React from "react";
import Books from "./pages/Search";
import Detail from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Books />
    </div>
    </BrowserRouter>
  );
}

export default App;
