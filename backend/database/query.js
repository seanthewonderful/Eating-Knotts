import {
  User,
  Admin,
  Restaurant,
  Rating,
  Land,
  Cuisine,
  db,
  MealType,
} from "./model.js";

const rest1 = await Restaurant.findOne({ include: { model: Land } });

console.log(rest1);

await db.close();
