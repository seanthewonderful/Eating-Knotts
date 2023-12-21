import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";

import authHandlers from "./controllers/authController.js";
import userHandlers from "./controllers/userController.js";
import adminHandlers from "./controllers/adminController.js";
import restaurantHandlers from "./controllers/restaurantController.js";
import ratingHandlers from "./controllers/ratingController.js";

const app = express();

import dotenv from "dotenv";
dotenv.config();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: process.env.VITE_EXPRESS_SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);

// Authentication
const { sessionCheck, login, adminLogin, logout } = authHandlers;
//Users
const {
  getUserById,
  getUserByUsername,
  createUser,
  updateUser,
  adminUpdateUser,
  updateUserPassword,
  deleteUser,
} = userHandlers;
// Admins
const { getEverything, getAdminById, createAdmin, updateAdmin, deleteAdmin } =
  adminHandlers;
// Restaurants
const {
  getAllRestaurants,
  getRestaurantsByLand,
  getRestaurantsByName,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = restaurantHandlers;
// Ratings
const {
  getUserRatings,
  getUserRatingOfRestaurant,
  createRating,
  updateRating,
  deleteRating,
} = ratingHandlers;

// Authentication
app.get("/api/session-check", sessionCheck);
app.post("/api/login", login);
app.post("/api/login/admin", adminLogin);
app.get("/api/logout", logout);

// Users
app.get("/api/user/id/:userId", getUserById);
app.get("/api/user/username/:username", getUserByUsername);
app.post("/api/user/create", createUser);
app.put("/api/user/update/:userId", updateUser);
app.put("/api/user/admin-update/:userId", adminUpdateUser);
app.put("/api/user/update/password/:userId", updateUserPassword);
app.delete("/api/user/delete/:userId", deleteUser);

// Admins
app.get("/api/admin/id/:adminId", getAdminById);
app.get("/api/admin/access/:adminId", getEverything);
app.post("/api/admin/create", createAdmin);
app.put("/api/admin/update/:adminId", updateAdmin);
app.delete("/api/admin/delete/:adminId", deleteAdmin);

// Restaurants
app.get("/api/restaurants/all", getAllRestaurants);
app.get("/api/restaurants/land/:landId", getRestaurantsByLand);
app.get("/api/restaurants/name", getRestaurantsByName);
app.get("/api/restaurant/id/:restaurantId", getRestaurantById);
app.post("/api/restaurant/create", createRestaurant);
app.put("/api/restaurant/update/:restaurantId", updateRestaurant);
app.delete("/api/restaurant/delete/:restaurantId", deleteRestaurant);

// Ratings
app.get("/api/ratings/user-ratings/:userId", getUserRatings);
app.get(
  "/api/rating/user-restaurant/:userId/:restaurantId",
  getUserRatingOfRestaurant
);
app.post("/api/rating/create/:restaurantId", createRating);
app.put("/api/rating/update/:ratingId", updateRating);
app.delete("/api/rating/delete/:ratingId", deleteRating);

ViteExpress.listen(app, 9009, () =>
  console.log(`Knotted up at http://localhost:9009`)
);
