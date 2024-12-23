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
import AdminHome from "./admin/pages/AdminHome";
import AddPost from "./admin/components/posts/AddPost";
import PostList from "./admin/components/posts/PostList";
import User from "./admin/pages/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* for user */}
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
        {/* for user */}

        {/* for admin */}
        <Route path="/dashboard" element={<AdminHome />} />
        <Route path="/add_post" element={<AddPost />} />
        <Route path="/post_list" element={<PostList />} />
        <Route path="/users" element={<User />} />

        {/* for admin */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
