import Listing from "./pages/Listing.jsx";
import { Header } from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { Favourites } from "./components/Favourites.jsx";
import Login from "./components/Login.jsx";
import { RequiresAuth } from "./components/RequireAuth.jsx";
import { useEffect } from "react";
const App = () => {
  const handleCallbackResponse = (response) => {};
  useEffect(() => {
    // global google
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id:
        "566839184448-7qjafofhapeirodo7ub7kp08t61pnu2b.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
  }, []);
  return (
    <div className="bg-gradient-to-r from-green-200 to-pink-200">
      <Header />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route
          path="/favourites"
          element={
            <RequiresAuth>
              <Favourites />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
