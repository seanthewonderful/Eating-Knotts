import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile, { profileLoader } from "./pages/profiles/Profile.jsx";
import ProfileAdmin, { adminLoader } from "./pages/profiles/ProfileAdmin.jsx";
import Navbar from "./components/Navbar.jsx";
import AllRestaurants, { allRestaurantsLoader } from "./pages/Restaurants.jsx";
import LandRestaurants, {
  landRestaurantLoader,
} from "./pages/LandRestaurants.jsx";
import RestaurantPage, {
  restaurantProfileLoader,
} from "./pages/RestaurantPage.jsx";
import Login from "./pages/authPages/Login.jsx";
import Register from "./pages/authPages/Register.jsx";
import CuisineRestaurants, {
  cuisineRestaurantLoader,
} from "./pages/CuisineRestaurants.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import MealTypeRestaurants, {
  mealTypeRestaurantLoader,
} from "./pages/MealTypeRestaurants.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route
        index
        element={<Home />}
        loader={allRestaurantsLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="profile/:userId"
        element={<Profile />}
        loader={profileLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="admin/:adminId"
        element={<ProfileAdmin />}
        loader={adminLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="restaurants"
        element={<AllRestaurants />}
        loader={allRestaurantsLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="restaurant/:restaurantId"
        element={<RestaurantPage />}
        loader={restaurantProfileLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="land/rest/:landName"
        element={<LandRestaurants />}
        loader={landRestaurantLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="cuisine/restaurants/:cuisineName"
        element={<CuisineRestaurants />}
        loader={cuisineRestaurantLoader}
        errorElement={<NotFound />}
      />
      <Route
        path="mealtype/restaurant/:mealTypeName"
        element={<MealTypeRestaurants />}
        loader={mealTypeRestaurantLoader}
        errorElement={<NotFound />}
      />
      <Route path="login" element={<Login />} errorElement={<NotFound />} />
      <Route
        path="register"
        element={<Register />}
        errorElement={<NotFound />}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
