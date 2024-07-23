import {
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from "./components/pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SignUpPage />} />

      </Routes>
    </div>
  );
}

export default App;
