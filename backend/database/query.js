import { User, Admin, Restaurant, Rating, Land, db } from "./model.js";

console.log(await Admin.findAll());

await db.close();
