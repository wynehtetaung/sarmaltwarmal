import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import FoodDetail from "./pages/FoodDetail";
import PlaceDetail from "./pages/PlaceDetail";
import List from "./pages/List";
import StreetFood from "./components/list/StreetFood";
import CafeShop from "./components/list/CafeShop";
import Pagoda from "./components/list/Pagoda";
import Restaurant from "./components/list/Restaurant";
import Food from "./pages/Food";
import Place from "./pages/Place";
import "../src/App.css";
import AdminHome from "./admin/pages/AdminHome";
import AddPost from "./admin/pages/posts/AddPost";
import PostList from "./admin/pages/posts/PostList";
import User from "./admin/pages/User";
import Comment from "./admin/pages/Comment";
import Rating from "./admin/pages/Rating";
import CardDetail from "./admin/components/card/CardDetail";
import AdminLogin from "./admin/AdminLogin";
import Password2 from "./admin/Password2";
import Error from "./pages/Error";
import Street_Food from "./admin/pages/collections/Street_Food";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* for user */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/food" element={<Food />} />
        <Route path="/list/place" element={<Place />} />
        <Route path="/street_food" element={<StreetFood />} />
        <Route path="/cafe_shop" element={<CafeShop />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/food_detail" element={<FoodDetail />} />
        <Route path="/place_detail" element={<PlaceDetail />} />
        <Route path="/search" element={<Search />} />
        {/* for user */}

        <Route path="*" element={<Error />} />

        {/* for admin */}
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/password2" element={<Password2 />} />

        <Route path="/admin/dashboard" element={<AdminHome />} />
        <Route path="/admin/add_post" element={<AddPost />} />
        <Route path="/admin/post_list" element={<PostList />} />
        <Route path="/admin/post_detail" element={<CardDetail />} />
        <Route path="/admin/users" element={<User />} />
        <Route path="/admin/comments" element={<Comment />} />
        <Route path="/admin/ratings" element={<Rating />} />
        <Route path="/admin/street_food" element={<Street_Food />} />
        <Route path="/admin/cafe_shop" element={<Street_Food />} />
        <Route path="/admin/pagoda" element={<Street_Food />} />
        <Route path="/admin/restaurant" element={<Street_Food />} />

        {/* for admin */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
