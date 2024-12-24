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
import Comment from "./admin/pages/Comment";
import Rating from "./admin/pages/Rating";
import CardDetail from "./admin/components/card/CardDetail";
import AdminLogin from "./admin/AdminLogin";
import Password2 from "./admin/Password2";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* for user */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

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

        <Route path="*" element={<Error />} />

        {/* for admin */}
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/password2" element={<Password2 />} />

        <Route path="/dashboard" element={<AdminHome />} />
        <Route path="/add_post" element={<AddPost />} />
        <Route path="/post_list" element={<PostList />} />
        <Route path="/post_detail" element={<CardDetail />} />
        <Route path="/users" element={<User />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/ratings" element={<Rating />} />

        {/* for admin */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
