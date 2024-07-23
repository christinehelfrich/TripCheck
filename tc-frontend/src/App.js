import {
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from "./components/pages/SignUpPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  );
}

export default App;
