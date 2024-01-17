import { User, Land, Restaurant, Rating, db } from "./model.js";

// Users
const carl = await User.findOne({ where: { username: "carl" } });
const rory = await User.findOne({ where: { username: "rory" } });
const billie = await User.findOne({ where: { username: "billie" } });
const pam = await User.findOne({ where: { username: "pam" } });
const larry = await User.findOne({ where: { username: "larry" } });

// Restaurants
const SBDots = await Restaurant.findByPk(1);
const grizzlyCreek = await Restaurant.findByPk(2);
const snoopyRefresh = await Restaurant.findByPk(3);
const caveInn = await Restaurant.findByPk(4);
const fiestaRefresh = await Restaurant.findByPk(5);
const bajaTaqueria = await Restaurant.findByPk(6);
const cantinaDelSur = await Restaurant.findByPk(7);
const papasMexicans = await Restaurant.findByPk(8);
const casaCalifornia = await Restaurant.findByPk(9);
const oaxacaJoes = await Restaurant.findByPk(10);
const SSDots = await Restaurant.findByPk(11);
const johnnyRockets = await Restaurant.findByPk(12);
const boardwalkBBQ = await Restaurant.findByPk(13);
const boardwalkPretzels = await Restaurant.findByPk(14);
const charlestonCoffee = await Restaurant.findByPk(15);
const coastersDiner = await Restaurant.findByPk(16);
const memoryLaneRefresh = await Restaurant.findByPk(17);
const propShopPizza = await Restaurant.findByPk(18);
const mixItIceCream = await Restaurant.findByPk(19);
const suttersFunnel = await Restaurant.findByPk(20);
const suttersPizza = await Restaurant.findByPk(21);
const suttersGrill = await Restaurant.findByPk(22);
const onAStick = await Restaurant.findByPk(23);
const pemmicanPickle = await Restaurant.findByPk(24);
const pandaExpress = await Restaurant.findByPk(25);
const minersMac = await Restaurant.findByPk(26);
const logRideIcee = await Restaurant.findByPk(27);
const logRideFunnel = await Restaurant.findByPk(28);
const gourmetChurro = await Restaurant.findByPk(29);
const ghostTownGrub = await Restaurant.findByPk(30);
const ghostTownGrill = await Restaurant.findByPk(31);
const ghostTownBakery = await Restaurant.findByPk(32);
const calicoSaloon = await Restaurant.findByPk(33);
const calicoTaterBites = await Restaurant.findByPk(34);
const firemansBBQ = await Restaurant.findByPk(35);
const wildernessBroiler = await Restaurant.findByPk(36);
const wildernessRefresh = await Restaurant.findByPk(37);
const cableCar = await Restaurant.findByPk(38);
const chickenDinner = await Restaurant.findByPk(39);
const farmBakery = await Restaurant.findByPk(40);
const starbucksOutside = await Restaurant.findByPk(41);
const tgif = await Restaurant.findByPk(42);

console.log(await Restaurant.findAll());

await db.close();
