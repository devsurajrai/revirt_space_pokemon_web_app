import Listing from "./pages/Listing.jsx";
import { Header } from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { Favourites } from "./components/Favourites.jsx";
import Login from "./components/Login.jsx";
import { RequiresAuth } from "./components/RequireAuth.jsx";
const App = () => {
  return (
    <div>
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
