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

const admins = await Admin.findAll({
  order: [
    ['admin_id', 'ASC']
  ]
})

console.log(admins);

await db.close();
