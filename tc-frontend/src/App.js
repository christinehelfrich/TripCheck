import {
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from "./components/pages/SignUpPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NavBar from "./components/organisms/NavBar";
import MyTripsPage from "./components/pages/MyTripsPage";
import CreateItineraryPage from "./components/pages/CreateItineraryPage";
import ItineraryPage from "./components/pages/ItineraryPage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mytrips" element={<MyTripsPage />} />
      <Route path="/createitinerary" element={<CreateItineraryPage />} />
      <Route path="/itinerary/:itineraryId" element={<ItineraryPage />} />
      </Routes>
    </div>
  );
}

export default App;
