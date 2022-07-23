import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";

function App() {
  const [isLogged, setIsLogged] = useState(false)
  if (isLogged === true) {
    setIsLogged(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : <Login/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
