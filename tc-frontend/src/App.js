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
import AuthGuardedRoute from "./components/auth/AuthGuardedRoute";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mytrips" element={
                  <AuthGuardedRoute>  
                    <MyTripsPage />
                  </AuthGuardedRoute>
                  } />
      <Route path="/createitinerary" element={
                  <AuthGuardedRoute> 
                    <CreateItineraryPage />
                  </AuthGuardedRoute>} />
      <Route path="/itinerary/:itineraryId" element={
                  <AuthGuardedRoute> 
                    <ItineraryPage />
                  </AuthGuardedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
