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

// rory's ratings
await Rating.bulkCreate([
  {
    stars: 5,
    review:
      "I come here for the atmosphere, and I leave here out of necessity. This is a great place to relax for a bit, especially out on the patios upstairs. Now as for the food, well, it's the best food you'll find in Grizzly Creek Lodge.",
    userId: rory.userId,
    restaurantId: grizzlyCreek.restaurantId,
  },
  {
    stars: 5,
    review:
      "There's not much of a line here typically, so I'm always filling up a soda.",
    userId: rory.userId,
    restaurantId: snoopyRefresh.restaurantId,
  },
  {
    stars: 5,
    review:
      "This is a great place to wait for a pretzel while you told your child that you were going to watch them go one one of the rides nearby.",
    userId: rory.userId,
    restaurantId: caveInn.restaurantId,
  },
  {
    stars: 5,
    review:
      "Nothing better than getting a refill in Fiesta Village a few minutes after getting a refill in Camp Snoopy. ",
    userId: rory.userId,
    restaurantId: fiestaRefresh.restaurantId,
  },
  {
    stars: 5,
    review:
      "Fiesta Village has upped its food game, and Baja Taqueria is one of the examples. They provide an upscale Mexican taco experience, which is great when you're trying to get people to pay more money for tacos. The presentation and flavor is pretty good. Although, sometimes I decide to skip it so that my son can have dinner.",
    userId: rory.userId,
    restaurantId: bajaTaqueria.restaurantId,
  },
  {
    stars: 5,
    review:
      "This is a fun walk-up window serving some American-Mexican variety plates. My favorite thing here are the memories.",
    userId: rory.userId,
    restaurantId: papasMexicans.restaurantId,
  },
  {
    stars: 5,
    review:
      "Now this is a more reasonable option for food, and therefore the line is generally longer. If you can get through the line though, it winds up being a Chipotle-esque style assembly of food, and there is a self-serve soda fountain. Plus there's plenty of seating across the way and even more patio seating out in the plaza. A great place to spend a dollar or thirty.",
    userId: rory.userId,
    restaurantId: casaCalifornia.restaurantId,
  },
  {
    stars: 4,
    review:
      "I always worry about getting enough food at BBQ joints in theme parks. But here, you don't focus on such things. You get your plate and take it to the patio area and hope that there's a band playing.",
    userId: rory.userId,
    restaurantId: boardwalkBBQ.restaurantId,
  },
  {
    stars: 5,
    review:
      "This place regularly allows me to refill my soda. How can I rate it anything less than 5?",
    userId: rory.userId,
    restaurantId: memoryLaneRefresh.restaurantId,
  },
  {
    stars: 3,
    review:
      "Prop Shop is very busy throughout the day, because it's a decent spot to order food. While everything here is about as good as any 2-star pizza parlor, the fact that it's in the theme park and has a self-serve soda fountain makes it a perfectly viable option for the family. Plus, even bad pizza is tolerable in America.",
    userId: rory.userId,
    restaurantId: propShopPizza.restaurantId,
  },
  {
    stars: 5,
    review:
      "If you want a funnel cake, I suggest coming here. Or one of the other funnel cake spots. But Ghost Town is classic for a funnel cake.",
    userId: rory.userId,
    restaurantId: suttersFunnel.restaurantId,
  },
  {
    stars: 3,
    review:
      "Chiq burgers and top-notch fries are the Sutter specialty. Well, they're more just average burgers and fries. And they're pretty expensive. But if the line's not crazy, this is a nice option to fill your tum-tum halfway through your day.",
    userId: rory.userId,
    restaurantId: suttersGrill.restaurantId,
  },
  {
    stars: 5,
    review:
      "A solid little spot to grab a refill or a small snack. I recommend this place to everyone who comes to America.",
    userId: rory.userId,
    restaurantId: pemmicanPickle.restaurantId,
  },
  {
    stars: 5,
    review:
      "A Panda in Knott's? Yes, please! The only downside of Panda Express is that they wont give you the season pass discount here. But you can get a refill in here and it's always been one of the best values in the park. Just like all Panda Expresses, frankly.",
    userId: rory.userId,
    restaurantId: pandaExpress.restaurantId,
  },
  {
    stars: 3,
    review:
      "I came here for some mac n cheese, and I left with a potato and some mac and cheese. And some bread. And some other things. But I have to say, it was far less exciting than I had hoped. I would return someday, but preferably if someone else is buying.",
    userId: rory.userId,
    restaurantId: minersMac.restaurantId,
  },
  {
    stars: 5,
    review:
      "The thing about the funnel cakes here is, they're the same if not better than anywhere else. So go for it!",
    userId: rory.userId,
    restaurantId: logRideFunnel.restaurantId,
  },
  {
    stars: 5,
    review:
      "Come to Calico Saloon and feel like a man for once in your life. I recommend getting a drink here to absorb the atmosphere. If there's any kind of show ever going on in here though, you better hope there's a place to watch cause it's small and lovely.",
    userId: rory.userId,
    restaurantId: calicoSaloon.restaurantId,
  },
  {
    stars: 4,
    review:
      "Imagine that you're a kid and you're having your first tater tot. If you can accurately do that, these will be the best tater tots in the country. If you can't they'll just be some fun tater tots. Because as an adult, hopefully you've realized that tater tots are all the same everywhere that tater tots are produced.",
    userId: rory.userId,
    restaurantId: calicoTaterBites.restaurantId,
  },
  {
    stars: 5,
    review:
      "If you can dine here before the line is long, then I highly recommend! A great atmosphere around here with staggered live music throughout the day makes this a fun place to hang out for a bit. But if the line is long, then get in it about an hour before you get hungry.",
    userId: rory.userId,
    restaurantId: firemansBBQ.restaurantId,
  },
  {
    stars: 5,
    review:
      "Love me a good refill. But this place is notorious for opening just a wee bit late. There are no refills at the broiler next door, so you'll have to walk around to prop shop or back to Ghost Town if they are closed.",
    userId: rory.userId,
    restaurantId: wildernessRefresh.restaurantId,
  },
  {
    stars: 5,
    review:
      "If you haven't been here, you could tell someone with a lot of nostalgia and there's an 80% chance they take you here. But only a 40% chance they offer to pay for it. Yes, it is expensive, and no, the food isn't amazing like it used to be, but yes, it is an historic and fun spot to get a meal. If it's the holiday season, then just know that about 2 billion southern California natives have reservations ahead of you.",
    userId: rory.userId,
    restaurantId: chickenDinner.restaurantId,
  },
]);

console.log(await Rating.findAll());

await db.close();
