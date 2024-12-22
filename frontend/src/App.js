import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./components/home/Collections";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import FoodDetail from "./pages/FoodDetail";
import PlaceDetail from "./pages/PlaceDetail";
import List from "./pages/List";
import StreetFood from "./components/list/StreetFood";
import CafeShop from "./components/list/CafeShop";
import Pagoda from "./components/list/Pagoda";
import Restaurant from "./components/list/Restaurant";
import "../src/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<List />} />
        <Route path="/street_food" element={<StreetFood />} />
        <Route path="/cafe_shop" element={<CafeShop />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/restaurant" element={<Restaurant />} />

        <Route path="/food_detail" element={<FoodDetail />} />
        <Route path="/place_detail" element={<PlaceDetail />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
