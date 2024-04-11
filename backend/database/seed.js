import {
  User,
  Admin,
  Restaurant,
  Cuisine,
  Land,
  FoodItem,
  MealType,
  db,
} from "./model.js";

const users = ["Carl", "Rory", "Billie", "Pam", "Larry"];
const admins = ["Sean", "Natalie"];
const lands = [
  "Camp Snoopy",
  "Fiesta Village",
  "Boardwalk",
  "Ghost Town",
  "Outside Park",
];

const campSnoopyRestaurants = [
  {
    name: "Silver Bullet Dippin' Dots",
    expense: "$",
    img: "https://nyfta.org/wp-content/uploads/2021/07/dippin-dots-event-catering.jpg",
    desciption:
      "The original and unbeatable flash-frozen ice cream sensation, Dippin’ Dots, comes in a variety of flavors. Including a Boysenberry flavor, only found at Knott’s Berry Farm! This quick service ice cream counter is a scientific and fun take on a classic American favorite. Dippin’ Dots is a fresh and flavorful way to eat this frosty treat. Whether it is a hot summer day or a crisp fall afternoon, Dippin’ Dots will satisfy your sweet tooth.",
    fullService: false,
    refills: false,
    xCoord: 33.84466616338294,
    yCoord: -117.9988737374498,
  },
  {
    name: "Grizzly Creek Lodge",
    expense: "$$",
    img: "/restaurants/grizzly.jpeg",
    description:
      "Nestled in the woods of Camp Snoopy, Grizzly Creek Lodge is the spot to have a delicious meal between adventures. You can find hamburgers, hot dogs, pizza (whole and by the slice), chicken tenders, fresh salads, and Snoopy's Kids Meals.\nDine inside or on the patio by Grizzly Creek Falls. Refresh and refill with a variety of ICEE and Coca-Cola fountain beverages. Gluten-friendly, vegetarian, and vegan options are available upon request. Grizzly Creek Lodge is open daily. Hours of operation vary and are subject to change without notice.",
    fullService: false,
    refills: false,
    xCoord: 33.845417783476165,
    yCoord: -117.99842002528662,
  },
  {
    name: "Camp Snoopy Refresh",
    expense: "$",
    img: "/restaurants/campSnoopyRefresh.jpeg",
    description:
      "Need a refill? So does every other parent around here. Letting your kids fill up your cup is realllllly cute and all, but frankly, please stop it.",
    fullService: false,
    refills: true,
    xCoord: 33.846243175517785,
    yCoord: -117.99851299276904,
  },
  {
    name: "Cave Inn Snacks",
    expense: "$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/cave-inn-banner.jpg",
    description:
      "Deep in the wilderness of Camp Snoopy, the Beagle Scout’s hungry friends are invited to take a break from camp activities with some delicious drinks and snacks. There is sure to be something of interest for explorers of all ages. With delicious soft pretzels, churros, soft-serve ice cream, and ICEEs, the Cave Inn is the perfect stop to grab a quick snack before your next adventure. Campers can also purchase or refill their souvenir bottle at Cave Inn Snacks.\nCave Inn Snacks is a quick-service snack counter located in Camp Snoopy along the main trail next to the Linus Launcher.",
    fullService: false,
    refills: true,
    xCoord: 33.845539032165256,
    yCoord: -117.99876438262443,
  },
];
const fiestaVillageRestaurants = [
  {
    name: "Fiesta Refresh",
    expense: "$",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mexican_Coke_%2811380037365%29_%28cropped%29.jpg",
    desciption: "Fiesta Village's refill-refresh station!",
    fullService: false,
    refills: true,
    xCoord: 33.84604054824681,
    yCoord: -117.99940488297,
  },
  {
    name: "Baja Taqueria",
    expense: "$$",
    img: "https://cache.undercovertourist.com/blog/2023/05/0523-fiesta-village-knotts-berry-farm-taco.jpg",
    description:
      "In the magical Alebrije Gardens, Baja Taqueria stands as a beacon for taco lovers seeking an authentic taste of Mexico. Specializing in the beloved fish taco, this vibrant street taco restaurant captures the essence of Baja California’s coastal charm, offering a delectable fusion of fresh seafood and traditional Mexican flavors.\nThe aroma of sizzling fish and zesty citrus fills the air, instantly whetting your appetite. The menu boasts an array of options, from classic battered fish to birria tacos, expertly seasoned and wrapped in warm corn tortillas. Each taco is adorned with crisp cabbage, a tangy selection of sauces, and salsas, delivering a burst of flavors with every bite.\nThe lively atmosphere is filled with colorful alebrije creatures and ample outdoor seating. Baja Taqueria is the ultimate destination for taco lovers seeking a fiesta of flavors.",
    fullService: false,
    refills: true,
    xCoord: 33.846382581829005,
    yCoord: -117.99965664753799,
  },
  {
    name: "Cantina Del Sur",
    expense: "$$",
    img: "https://balancingthechaos.com/wp-content/uploads/2023/05/Cantina-Del-Sur-at-Knotts-Berry-Farm.png",
    description:
      "Nestled in the heart of Fiesta Village, this vibrant bar exudes an intoxicating atmosphere that captures the essence of Mexican culture. The rhythmic beats of lively mariachi music reverberate through the air from the nearby Plaza Stage, inviting guests to dance and revel in the joyful ambiance.\nThis one-stop shop for specialty beverages will have plenty of thirst-quenching bebidas. With a selection of alcoholic drinks including beer, margaritas, and tequila tastings you’ll find the perfect pairing for the delectable street food you’ll find in Fiesta Village, like tacos and tamales, bursting with authentic flavors.",
    fullService: false,
    refills: true,
    xCoord: 33.84592257691393,
    yCoord: -117.99989063407229,
  },
  {
    name: "Papas Mexicanas",
    expense: "$$",
    img: "https://www.itsasmallworldblog.com/uploads/5/8/3/9/5839250/published/screenshot-20230713-093502-instagram.jpg?1689261566",
    description:
      "Papas Mexicanas is a culinary must do for French fries’ enthusiasts seeking a tantalizing twist on a classic favorite. In a vibrant corner of Fiesta Village, this loaded fries dining location takes comfort food to new heights with their mouthwatering specialty: carne asada fries.\nPicture a generous bed of perfectly cooked, golden-brown fires, topped with succulent marinated carne asada, melted cheese and a vibrant medley of fresh toppings. Each bite is a symphony of flavors, as the tender beef mingles with the creaminess of the cheese, the tang of salsa and the freshness of guacamole.\nThe aromas of grilled meat and spices waft through the air, creating an irresistible allure. Papas Mexicanas is the go-to destination for those seeking a unique and unforgettable dining experience where loaded fries become a delicious canvas for Mexican flavors to shine.",
    fullService: false,
    refills: true,
    xCoord: 33.845557108895164,
    yCoord: -117.99985262888659,
  },
  {
    name: "Casa California Restaurante",
    expense: "$$",
    img: "https://www.laughingplace.com/w/wp-content/uploads/2023/05/c7roaimbcvw0v4brllw3ptare2je51rejjbdkzmwllt5ovzgkt.jpg",
    description:
      "Craving delicious Mexican cuisine? In the heart of Fiesta Village, Casa California Restaurante is a colorful and inviting restaurant that promises an unforgettable dining experience.\nAs you enter the colorful courtyard, you’ll be greeted by the enticing aromas of freshly prepared Mexican delicacies. The menu is a treasure trove of favorites, featuring mouth-watering options such as flavorful burritos, bowls, and salads, along with quesadillas and nachos bursting with authentic flavors. Plus, you can enhance your order with chips and salsa, guacamole, or queso.\nEach dish is crafted with care, using high-quality ingredients and traditional recipes that pay homage to the rich culinary heritage of Mexico. To compliment your meal, Casa California Restaurante offers a range of refreshing Coca-Cola fountain drinks, ensuring a perfect pairing for your festive feast.\nWhether you’re seeking a quick bite between thrill rides or a leisurely meal with friends and family, Casa California Restaurante is the go-to destination for satisfying your Mexican food cravings.",
    fullService: false,
    refills: true,
    xCoord: 33.84575563404009,
    yCoord: -118.00005563947208,
  },
  {
    name: "Oaxaca Joe's Limonada",
    expense: "$",
    img: "/restaurants/oaxacaJoes.jpeg",
    description:
      "Don't try to make it to Fiesta Village without stopping here first. I'm a temptation to all who wander this way.\nNow, I know you want to get a refill in your affordably-priced refillable drink cup, but I'm gonna save us both a hassle and tell you that I don't do refills. Check around the corner, either direction.\nBut I have some good lemonade!",
    fullService: false,
    refills: false,
    xCoord: 33.84628504497875,
    yCoord: -117.99914654797973,
  },
];
const boardwalkRestaurants = [
  {
    name: "Supreme Scream Dippin' Dots",
    expense: "$",
    img: "/restaurants/dotsSupreme.jpeg",
    desciption:
      "The original and unbeatable flash-frozen ice cream sensation, Dippin’ Dots, comes in a variety of flavors. Including a Boysenberry flavor, only found at Knott’s Berry Farm! This quick service ice cream counter is a scientific and fun take on a classic American favorite. Dippin’ Dots is a fresh and flavorful way to eat this frosty treat. Whether it is a hot summer day or a crisp fall afternoon, Dippin’ Dots will satisfy your sweet tooth.",
    fullService: false,
    refills: false,
    xCoord: 33.845834258855724,
    yCoord: -118.00069363127315,
  },
  {
    name: "Johnny Rockets",
    expense: "$$$",
    img: "/restaurants/johnnyRockets.jpeg",
    desciption:
      "Knott's Berry Farm's Johnny Rockets holds the distinction of being the largest Johnny Rockets in North America! Johnny Rockets is known for its all-American diner look and feel, offering guests delicious food and upbeat music. This table-service experience offers a large variety of signature burgers, or you can feel free to create your own to your liking.\n You can also dive into a variety of sandwiches, hotdogs, and salads. Fries and onion rings are a recommended addition to every dish. Don't forget to pair your meal with a shake – choose from the collection of original and deluxe flavors, made with premium ice cream and hand-spun! Gluten-free, vegetarian, and vegan options are available upon request.",
    fullService: true,
    refills: true,
    xCoord: 33.84414994569008,
    yCoord: -118.00176221069097,
  },
  {
    name: "Boardwalk BBQ",
    expense: "$$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/boardwalk-bbq-banner.jpg",
    description:
      "The Boardwalk BBQ features savory smokehouse sausages, pulled pork, rotisserie chicken, and more, paired with classic side dishes like flavored mac and cheese dishes, baked beans, cornbread, and more. Beer and wine are also available at this location. Boardwalk BBQ is open daily. Hours of operation vary and are subject to change without notice.",
    fullService: false,
    refills: true,
    xCoord: 33.84554789530142,
    yCoord: -118.00116235344431,
  },
  {
    name: "Boardwalk Pretzels & Churros",
    expense: "$",
    img: "/restaurants/boardwalkPretzels.jpeg",
    description:
      "Step right up! Come one, come all, to the most amazing pretzel on Earth! It's pretty good, anyway. Actually maybe the churros are better. Try one of each!",
    fullService: false,
    refills: false,
    xCoord: 33.84582803719722,
    yCoord: -118.00164953887362,
  },
  {
    name: "Charleston Circle Coffee",
    expense: "$",
    img: "/restaurants/charlestonCoffee.jpeg",
    description:
      "Home of Bumble Bear-y’s Award-Winning Boysenberry Pie!\nThese drink concoctions are the “bee’s knees” of the Boardwalk! Charleston Circle Coffee is a quick service drink counter located across from Charleston Circle water fountain near Johnny Rockets. Charleston Circle Coffee features various farm-fresh pastries, like our famous Snoopy cookies, and proudly serves Starbucks coffee. Try various libations, including brewed coffee, iced lattes, teas, Frappuccinos, and everything in between. Don’t miss an opportunity to try the Boysenberry Latte, only found at Knott's Berry Farm!\nDownload the Knott’s Berry Farm mobile app to order ahead at this location.",
    fullService: false,
    refills: true,
    xCoord: 33.843814699560895,
    yCoord: -118.00140488279388,
  },
  {
    name: "Coasters Diner",
    expense: "$$",
    img: "/restaurants/coastersDiner.jpeg",
    description:
      "This signature eatery combines classic 50s tunes with different types of American classics. Offering up burgers, hot dogs, chicken tenders, French fries, and extra-thick milkshakes, Coasters Diner serves today’s meal with retro-style fun!\nLook out for seasonal specialty milkshakes at Coasters Diner as we celebrate the Knott’s Berry Farm Seasons of Fun throughout the year!\nDon't miss Xcelerator The Burger, a 12-inch patty packed high with bacon, cheese, and fries!\nCoasters Diner is a quick-service counter with indoor and outdoor seating located on the Knott’s Boardwalk between the Xcelerator and Coast Rider.",
    fullService: false,
    refills: true,
    xCoord: 33.8455583864178,
    yCoord: -118.00199084876958,
  },
  {
    name: "Memory Lane Refresh",
    expense: "$",
    img: "/restaurants/memoryLaneRefresh.jpeg",
    description: "Refills here! Grab your refills!",
    fullService: false,
    refills: true,
    xCoord: 33.843693847798946,
    yCoord: -118.00184680128721,
  },
  {
    name: "Prop Shop Pizzeria",
    expense: "$$",
    img: "/restaurants/propShopPizza.jpeg",
    description:
      "Take a moment out of the spotlight to satisfy those taste buds at Prop Shop Pizzeria, An Italian Kitchen. This all-new quick service Italian eatery is located right outside the Walter Knott Theater. The Prop Shop Pizzeria, An Italian Kitchen offers several food options for guests, including pasta, salads, garlic “Knotts” and a variety of brick oven pizzas. Served by the slice or whole, it’s sure to satisfy cravings of any size. Pair any meal with a refreshing beer or wine. For the younger guys and dolls, choose from a variety of Coca-Cola fountain drinks.",
    fullService: false,
    refills: true,
    xCoord: 33.84312497747109,
    yCoord: -118.0018018559083,
  },
];
const ghostTownRestaurants = [
  {
    name: "Mix-It-Up Ice Cream Shop",
    expense: "$$",
    img: "https://www.eatlife.net/knotts-berry-farm/images/knotts-berry-farm-mix-it-up-ice-cream-shop.jpg",
    desciption:
      "These refreshing treats are the best in the West! This quick-service snack counter offers all of your favorite sweet treats. Take on the cookiewich challenge - vanilla or boysenberry soft-serve ice cream pressed between two freshly baked cookies. It’s big enough to share but so tasty that you won’t want to.\n Are you looking for something a little smaller? Try a waffle cone or classic cone with boysenberry or vanilla soft-serve ice cream. For an extra treat, dip your soft-serve cone in chocolate! To quench your thirst, take a sip of our freshly squeezed lemonade. Refresh with an ICEE – served in regular, ½ Yard, and Full Yard sizes. There is a wide variety of ICEE flavors, including boysenberry. Top it off with soft-serve ice cream for a tasty ICEE float!",
    fullService: false,
    refills: false,
    xCoord: 33.843944680039925,
    yCoord: -118.0005069630482,
  },
  {
    name: "Sutter's Funnel Cake",
    expense: "$",
    img: "https://www.eatlife.net/knotts-berry-farm/images/knotts-berry-farm-sutters-funnel-cakes.jpg",
    desciption:
      "Mosey on over to the outskirts of Ghost Town for some of the finest funnel cakes this side of the Wild West! The quick-service dessert window, Sutter’s Funnel Cake, is home to Knott’s Berry Farm’s famous freshly made funnel cakes. Fried to perfection, enjoy a classic powdered sugar funnel cake or take on a “Fully Loaded” funnel cake that comes with ice cream and your choice of topping, boysenberry, strawberry, or chocolate.",
    fullService: false,
    refills: true,
    xCoord: 33.84407626370309,
    yCoord: -117.99939478500389,
  },
  {
    name: "Sutter's Pizza",
    expense: "$",
    img: "https://cpfoodblog.com/wp-content/uploads/2014/12/141125-Knotts-Sutters-Pizza.jpg",
    desciption:
      "Are you craving pizza? Look no more! Located near the entrance of Ghost Town, gourmet pizza is sold by-the-pie or by-the-slice. We also offer different styles of pizza throughout our Seasons of Fun!",
    fullService: false,
    refills: false,
    xCoord: 33.843956486865366,
    yCoord: -117.9993005286782,
  },
  {
    name: "Sutter's Grill",
    expense: "$",
    img: "/restaurants/suttersGrill.jpeg",
    description:
      "Right past the entrance of our Famous Ghost Town, come enjoy hamburgers, buffalo style breaded chicken sandwiches, BBQ bacon cheeseburgers, and salads. Sit down in one of our many picnic areas around the restaurant and enjoy the sights and sounds of the Wild West Stunt Shows, Silver Bullet, and our Seasonal Crafters!",
    fullService: false,
    refills: true,
    xCoord: 33.84399247853677,
    yCoord: -117.99934871711179,
  },
  {
    name: "Strictly-On-A-Stick",
    expense: "$",
    img: "https://img.te2.io/unsafe/228x0:1149x690/cf/CF_KBF/client/86312f6b-aeb2-4fb2-965f-2441e40345fa/kbf-banner-image-strictly-stick-23.jpg",
    desciption:
      "Eat on the go with delicious hand-dipped corn dogs! These golden-brown corn dogs provide a savory solution to any appetite and are a must-try for corn dog lovers. At Strictly-On-A-Stick, you can also find seasonal items that change regularly! Be sure to check out our seasonal event guides for details.\n Pair any corn dog with an order of shoestring fries – the ideal meal for any partner. Strictly on a Stick is a quick-service counter located across from the entrance of Timber Mountain Log Ride in Ghost Town.",
    fullService: false,
    refills: false,
    xCoord: 33.84508051053724,
    yCoord: -118.00083336758328,
  },
  {
    name: "Pemmican Pickle",
    expense: "$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/pemmican-pickle-tileimage.jpg",
    desciption:
      "Stop by the entrance of Ghost Town for a quick snack or soda to start your day and find pickles, churros, pretzels, sodas, ICEE, and select beer offerings.",
    fullService: false,
    refills: true,
    xCoord: 33.84390111330971,
    yCoord: -117.99929367262627,
  },
  {
    name: "Panda Express",
    expense: "$$",
    img: "https://www.eatlife.net/knotts-berry-farm/images/knotts-berry-farm-panda-express.jpg",
    desciption:
      "Located across from Timber Mountain Log Ride, enjoy various gourmet Asian-inspired dishes, wok-tossed with fresh veggies and gourmet sauces. Items include the fan-favorite orange chicken and broccoli beef. Combo meals are served with a choice of either fried rice, steamed rice, chow mein, or mixed vegetables. Add a veggie spring roll, cream cheese rangoons, or chicken egg roll to any order for an extra crunch. This quick-service eatery offers both indoor and outdoor seating for your convenience.",
    fullService: false,
    refills: true,
    xCoord: 33.8448799666862,
    yCoord: -118.00081375477741,
  },
  {
    name: "Miner's Mac & Spuds",
    expense: "$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/kbf-miners-mac-spuds-banner.jpg",
    desciption:
      "Transport yourself to the bygone era of mining and adventure with the flavorful offerings of the Old West at Miner's Mac and Spuds.\n Just a stone's throw away from the exhilarating Ghostrider, enjoy hearty servings of loaded potatoes and scrumptious macaroni and cheese. Indulge in the perfect combination of flavors with our signature toppings, such as savory chili and cheese, tender pulled pork, and zesty buffalo chicken.\n To complete your meal, we offer a delightful dessert option: our mini apple pie served hot and fresh. For those seeking an extra touch of indulgence, enjoy it a la mode with a scoop of creamy ice cream. It's the perfect sweet ending to your savory feast.",
    fullService: false,
    refills: true,
    xCoord: 33.843164577100374,
    yCoord: -117.99949629141645,
  },
  {
    name: "Log Ride ICEE Mix-It-Up",
    expense: "$",
    img: "https://cpfoodblog.com/wp-content/uploads/2014/12/141125-Knotts-ICEE-Mix-it-Up.jpg",
    desciption:
      "Refresh yourself with an ICEE! There is a huge selection of ICEE flavors, including boysenberry. Top it off with vanilla soft-serve ice cream for a tasty ICEE float!\n Log Ride ICEE Mix-It-Up is open on weekends and select days throughout the season.",
    fullService: false,
    refills: false,
    xCoord: 33.84518251555073,
    yCoord: -118.00084785819482,
  },
  {
    name: "Log Ride Funnel Cake",
    expense: "$",
    img: "https://cpfoodblog.com/wp-content/uploads/2014/12/141125-Knotts-Log-Ride-Funnel-Cake.jpg",
    desciption:
      "After splashing down the log flume nestled in the mountain range on the Timber Mountain Log Ride, you’ve worked up an appetite for this park favorite. Located right across the way, the Log Ride Funnel Cake is your stop for nothing but funnel cakes!\n Loggers come from miles around to taste these freshly made funnel cakes that are poured and fried daily, served to perfection, and covered with powdered sugar. For some extra flavor, pick a topping of strawberry, boysenberry, or chocolate. The final touch is a dollop of soft-serve ice cream.",
    fullService: false,
    refills: true,
    xCoord: 33.84522343614809,
    yCoord: -118.00084614004743,
  },
  {
    name: "Gourmet Churro Factory",
    expense: "$",
    img: "https://www.eatlife.net/knotts-berry-farm/images/knotts-berry-farm-churro-factory.jpg",
    desciption:
      "Come and get 'em! The Gourmet Churro Factory is your one-stop shop for handmade churros. Watch as our specially trained culinary team rolls, cranks, and fry fresh churros from scratch before your very eyes. Get them hot and get them stuffed with boysenberry, strawberry, or Bavarian cream.\n To make your churro extra sweet, try a churro sundae featuring a churro with ice cream and a choice of strawberry or boysenberry topping and whipped cream. Check back regularly as seasonal flavored churros are featured frequently. ",
    fullService: false,
    refills: true,
    xCoord: 33.843913326427334,
    yCoord: -118.00050077526134,
  },
  {
    name: "Ghost Town Grub",
    expense: "$",
    img: "/restaurants/ghostTownGrub.jpeg",
    description:
      "Folks in these parts can’t resist the satisfying concoctions of Ghost Town Grub. Stop by the log cabin on Main Street for delicious funnel cakes freshly made and topped with boysenberry, strawberry, or chocolate. Order any funnel cake “Fully Loaded,” which includes ice cream and a topping of your choice.\nKeep your eyes out for the ever-changing “Seasonal Surprise,” a new and fun treat offered during our different Seasons of Fun. Including the Boysenberry Fun Bun, deep-fried PB&J, and more! Coca-Cola beverages, milk, coffee, and bottled water are also available at this location.",
    fullService: false,
    refills: true,
    xCoord: 33.84359235017644,
    yCoord: -117.9999856391515,
  },
  {
    name: "Ghost Town Grill",
    expense: "$$$",
    img: "https://live.staticflickr.com/7178/6872174887_7ab8751f7d_b.jpg",
    desciption:
      "We’re open when you’re hungry. This table-service western experience provides both indoor and outdoor patio dining with a view. This Ghost Town setting offers you a view of the blacksmith at work, and you might even catch a glimpse of a Ghost Town cowboy showdown. The action of Main Street will complement your meal as you savor hearty home-cooked favorites and seasonal dishes.\n Enjoy soup and chili served in a bread bowl, hearty sandwiches, fresh salads, and daily chef specials, as well as beer and wine. There’s something for everyone, including a special kid’s meal menu. And don’t forget about the dessert – boysenberry pie, cake, and ice cream are just some of the sweet treats waiting for you. The Sarsaparilla float alone is something you won’t find anywhere else in the park!",
    fullService: true,
    refills: true,
    xCoord: 33.84361565810481,
    yCoord: -117.99969524912787,
  },
  {
    name: "Ghost Town Bakery & Coffee Shop",
    expense: "$",
    img: "https://www.eatlife.net/knotts-berry-farm/images/knotts-berry-farm-ghost-town-bakery.jpg",
    desciption:
      "Your day is not complete without a trip to this hometown-style bakery that serves up something for everyone. Start your day with a cup of hot coffee, latte, or cappuccino and your favorite baked goods, including gooey cinnamon buns, made fresh daily at our Knott's Berry Farm bakery. You can try our sourdough bread bowls with either Knott's Famous Chili or Clam Chowder for a heartier lunch option. Stuffed croissants and sandwiches are other savory options that can satisfy any craving.\n To satisfy that sweet tooth, you'll find everything from Mrs. Knott's Famous Boysenberry or Apple Pies to cookies, cake, fruit tarts, or even chocolate-covered strawberries. Check back regularly for special Seasons of Fun food offerings. Coca-Cola refreshments are also served here. Gluten-free, vegetarian, and vegan options are available upon request.",
    fullService: false,
    refills: false,
    xCoord: 33.84305079285959,
    yCoord: -117.99946522653777,
  },
  {
    name: "Calico Saloon",
    expense: "$$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/calico-saloon-banner.jpg",
    description:
      "This old west saloon has been entertaining guests and wetting whistles at Knott’s Berry Farm since its original opening in the 1940s. Located in the center of the park, the Calico Saloon is home to some of the finest beverages and even finer shows this side of the wild West.\nAfter wandering through the classic swinging saloon doors, mosey on up to the counter where the barkeep can fix you a drink. Adults can find alcoholic beverages including beer and wine, while younger cowpokes may fancy a sarsaparilla or boysenberry punch. Be sure to ask your bartender about any “signature” drinks!\nAvailable exclusively at the Calico Saloon is the Calico Soda. Watch as your bartender handcrafts a boysenberry cream soda right in front of your eyes using a Knott’s Berry Farm secret recipe. Each Calico Soda is served in a souvenir mason jar for you to keep!\nClassic snacks like popcorn and pickles are also available in the Calico Saloon, which opens daily.",
    fullService: false,
    refills: true,
    xCoord: 33.843951675514646,
    yCoord: -118.00033113912964,
  },
  {
    name: "Calico Tater Bites",
    expense: "$",
    img: "https://littlegraythread.files.wordpress.com/2020/11/turkey-dinner-tater-tots.jpg",
    description:
      "Are you craving some Tater Tots? Then this is the stop for you! Calico Tater Bites has delicious, loaded tater tots with many different toppings. Enjoy the tastes of the Wild West with the BBQ Pulled Pork Tots, topped with cheddar cheese and crispy fried jalapeno strips. Your taste buds will thank you.\nOther Tot options include the Calico Chili Cheese Tots, Buffalo Chicken Tender Tots, Mac & Cheese Tots, and the seasonal favorite - back by popular demand - Pastrami Tots!",
    fullService: false,
    refills: true,
    xCoord: 33.84396323667607,
    yCoord: -117.99921260762224,
  },
  {
    name: "Fireman's Brigade BBQ",
    expense: "$$",
    img: "/restaurants/firemansBBQ.jpeg",
    description:
      "This is not a drill! Fireman’s BBQ is your best bet for the tastiest open-air barbecued chicken, ribs, flank steak sandwiches, giant turkey legs, and baked potatoes. All meat is marinated for hours and grilled to perfection. Try the delicious and unique jalapeno bread, and don’t miss the fan-favorite Fire Roasted Corn on the Cob. If you're thirsty, you can wet your whistle with an ice-cold beer or Coca-Cola product!\nJust follow the savory aromas to Bird Cage Square, located in front of the Bird Cage Theatre. Outside dining is available in the heart of Ghost Town. Fireman’s BBQ is open daily.",
    fullService: false,
    refills: true,
    xCoord: 33.84343305856352,
    yCoord: -118.00018278621083,
  },

  {
    name: "Wilderness Broiler",
    expense: "$$",
    img: "/restaurants/wildernessBroiler.jpeg",
    description:
      "After an adventure aboard Calico River Rapids, head across the path to Wilderness Broiler. This quick service counter offers grilled all beef dog combinations for explorers of every age!\nYour tastebuds will go wild for The Sasquatch, loaded with Calico Chili and crispy onions. Indulge in The Chupacabra's nacho delight, featuring Cheese Sauce, Pico de Gallo, Sour Cream, and Fritos.\nTaste classic flavors with The Old Mill Dog's French Fries, Cheese Sauce, Chipotle Mayo, and bacon bits. Ignite your taste buds with the Dynamite Dog, wrapped in bacon, grilled onions, peppers, and mayo.\nPlus, even more unexplored combinations! Plus, you can pair any dog with Coca-Cola Fountain drinks also available. Each bite is an adventure, a fusion of flavor and wilderness spirit that defines Wilderness Dogs and Drinks.",
    fullService: false,
    refills: true,
    xCoord: 33.842991568596375,
    yCoord: -118.00107022732519,
  },
  {
    name: "Wilderness Refresh",
    expense: "$",
    img: "/restaurants/wildernessRefresh.jpeg",
    description: "Refills over here! Get your refills here!",
    fullService: false,
    refills: true,
    xCoord: 33.842936627453575,
    yCoord: -118.00085048251044,
  },
];
const outsideParkRestaurants = [
  {
    name: "Cable Car Kitchen",
    expense: "$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/cable-car-kitchen-banner.jpg",
    desciption:
      "Top off your amazing day at the park with a delectable funnel cake from Cable Car Kitchen. Enjoy delicious funnel cakes that are covered with boysenberry, apple cinnamon, or strawberry sauce and your choice of ice cream. A variety of ice cream is also available by the scoop, including the Knott’s Berry Farm signature boysenberry sherbet.\n Other sweet treats available at the Cable Car Kitchen include hand-scooped shakes, floats, and a cookiewich, aka ice cream cookie sandwich.",
    fullService: false,
    refills: false,
    xCoord: 33.84354474188987,
    yCoord: -117.99838094420134,
  },
  {
    name: "Mrs. Knott's Chicken Dinner Restaurant",
    expense: "$$$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/mrs-knotts-chicken-dinner-restaurant-banner.jpg",
    desciption:
      "Mrs. Knott’s Chicken Dinner Restaurant first opened in 1934 with Mrs. Knott and her children serving the first customers in their tea room. The restaurant has grown over the years into one of the largest in California, but the classic fried chicken dinner is still made the same way today using Mrs. Knott's recipes.",
    fullService: true,
    refills: false,
    xCoord: 33.843013506624004,
    yCoord: -117.99812879697058,
  },
  {
    name: "Farm Bakery",
    expense: "$$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/farm-bakery-banner.jpg",
    desciption:
      "Located in the California Marketplace, you will find your one-stop shop for all baked items.  Satisfy your sweet tooth with fresh pies, bread, and cookies baked on location at Knott's Berry Farm. Daily culinary concoctions include a variety of cookies and cupcakes.\n Having a celebration? The perfect cake makes all the difference. Order a customized cake for your small party, wedding, birthday, or holiday event. Choose from a variety of cake flavors and fillings – including the park favorite Boysenberry.  An array of cake designs and sizes ensures you will find what you are looking for. The Farm Bakery can work with you to bring your cake fantasies to life thanks to the talented Knott's Berry Farm bakers. Custom cake orders must be made in person and require a minimum of 48 hours. For more information, call (714) 220-5094.\n No time to order a cake? No problem. Premade cakes and pies are sold whole or by the slice. The variety of sweets and treats make the perfect complement to any meal.  See our menu selection of showcase and decorated cakes with a variety of flavors, Icings, cream fillings, and fruit fillings.",
    fullService: false,
    refills: false,
    xCoord: 33.84259551637073,
    yCoord: -117.99814892728045,
  },
  {
    name: "Starbucks Coffee",
    expense: "$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/starbucks-banner.jpg",
    desciption:
      "Enjoy Starbucks' world-class coffee drinks and entrees in a welcoming gathering place that evokes themes of the Knott family’s original roadside stand with the familiar, contemporary aesthetic of Starbucks stores.",
    fullService: false,
    refills: false,
    xCoord: 33.84364296556402,
    yCoord: -117.99866443392239,
  },
  {
    name: "T.G.I. Friday's",
    expense: "$$$",
    img: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kb-en-us/poi/dining/v2/tgi-fridays-banner.jpg",
    desciption:
      "T.G.I. Friday's is an All American casual bar and grill restaurant that differentiates itself with a unique point of view, promising to deliver an energizing Friday feeling for every guest every day.\n This recently remodeled casual dining restaurant is located outside the Knott’s Berry Farm main gate in the California Marketplace and is open for outdoor dining. Season Pass discounts do apply to food, alcohol excluded.\n “From burgers to steak, beer to cocktails, learn why in here, it’s always Friday.”",
    fullService: true,
    refills: false,
    xCoord: 33.84255330140951,
    yCoord: -117.99778549266746,
  },
];

console.log("Syncing database...");

await db.sync({ force: true });

console.log("Seeding database...");

// Create 2 Admins
const adminObjs = [];

for (let admin of admins) {
  adminObjs.push({
    username: admin.toLowerCase(),
    password: "test",
    email: `${admin.toLowerCase()}@${admin.toLowerCase()}.com`,
    firstName: admin.toLowerCase(),
    lastName: "Administrator",
  });
}

await Admin.bulkCreate(adminObjs);

console.log("Seeded Admin");

// Create 5 Users
const userObjs = [];

for (let user of users) {
  userObjs.push({
    username: user.toLowerCase(),
    password: "test",
    email: `${user.toLowerCase()}@${user.toLowerCase()}.com`,
    firstName: user.toLowerCase(),
    lastName: "Demo",
  });
}

await User.bulkCreate(userObjs);

console.log("Seeded User");

// Create the 4 Lands
for (let land of lands) {
  await Land.create({
    name: land,
  });
}

console.log("Seeded Land");

// Create cuisines
// for (let cuisine of cuisines) {
//   await Cuisine.create({
//     name: cuisine,
//   });
// }
const americanCuisine = await Cuisine.create({ name: "American" });
const southernCuisine = await Cuisine.create({ name: "Southern" });
const mexicanCuisine = await Cuisine.create({ name: "Mexican" });
const italianCuisine = await Cuisine.create({ name: "Italian" });
const dessertCuisine = await Cuisine.create({ name: "Dessert" });
const asianCuisine = await Cuisine.create({ name: "Asian" });
const coffeeCuisine = await Cuisine.create({ name: "Coffee" });
const alcoholCuisine = await Cuisine.create({ name: "Alcohol" });

console.log("Seeded Cuisine");

// Create MealTypes
const breakfast = await MealType.create({ name: "Breakfast" });
const lunch = await MealType.create({ name: "Lunch" });
const dinner = await MealType.create({ name: "Dinner" });
const snack = await MealType.create({ name: "Snack" });
const dessert = await MealType.create({ name: "Dessert" });

console.log("Seeded MealType");

// CREATE RESTAURANTS
// Create Camp Snoopy Restaurants
const campSnoopy = await Land.findOne({
  where: {
    name: "Camp Snoopy",
  },
});
for (let restaurant of campSnoopyRestaurants) {
  await campSnoopy.createRestaurant(restaurant);
}
// Create Fiesta Village Restaurants
const fiestaVillage = await Land.findOne({
  where: {
    name: "Fiesta Village",
  },
});
for (let restaurant of fiestaVillageRestaurants) {
  await fiestaVillage.createRestaurant(restaurant);
}
// Create Boardwalk Restaurants
const boardwalk = await Land.findOne({
  where: {
    name: "Boardwalk",
  },
});
for (let restaurant of boardwalkRestaurants) {
  await boardwalk.createRestaurant(restaurant);
}
// Create Ghost Town Restaurants
const ghostTown = await Land.findOne({
  where: {
    name: "Ghost Town",
  },
});
for (let restaurant of ghostTownRestaurants) {
  await ghostTown.createRestaurant(restaurant);
}
// Create Outside Park Restaurants
const outsidePark = await Land.findOne({
  where: {
    name: "Outside Park",
  },
});
for (let restaurant of outsideParkRestaurants) {
  await outsidePark.createRestaurant(restaurant);
}

console.log("Seeded Restaurants");

// Connect restaurants to Cuisines
// Query Restaurants
const SBDots = await Restaurant.findOne({
  where: { name: "Silver Bullet Dippin' Dots" },
});
const SSDots = await Restaurant.findOne({
  where: { name: "Supreme Scream Dippin' Dots" },
});
const grizzlyCreek = await Restaurant.findOne({
  where: { name: "Grizzly Creek Lodge" },
});
const snoopyRefresh = await Restaurant.findOne({
  where: { name: "Camp Snoopy Refresh" },
});
const caveInn = await Restaurant.findOne({
  where: { name: "Cave Inn Snacks" },
});
const fiestaRefresh = await Restaurant.findOne({
  where: { name: "Fiesta Refresh" },
});
const bajaTaqueria = await Restaurant.findOne({
  where: { name: "Baja Taqueria" },
});
const cantinaDelSur = await Restaurant.findOne({
  where: { name: "Cantina Del Sur" },
});
const papasMexicans = await Restaurant.findOne({
  where: { name: "Papas Mexicanas" },
});
const casaCalifornia = await Restaurant.findOne({
  where: { name: "Casa California Restaurante" },
});
const oaxacaJoes = await Restaurant.findOne({
  where: { name: "Oaxaca Joe's Limonada" },
});
const johnnyRockets = await Restaurant.findOne({
  where: { name: "Johnny Rockets" },
});
const boardwalkBBQ = await Restaurant.findOne({
  where: { name: "Boardwalk BBQ" },
});
const boardwalkPretzels = await Restaurant.findOne({
  where: { name: "Boardwalk Pretzels & Churros" },
});
const charlestonCoffee = await Restaurant.findOne({
  where: { name: "Charleston Circle Coffee" },
});
const coastersDiner = await Restaurant.findOne({
  where: { name: "Coasters Diner" },
});
const memoryLaneRefresh = await Restaurant.findOne({
  where: { name: "Memory Lane Refresh" },
});
const propShopPizza = await Restaurant.findOne({
  where: { name: "Prop Shop Pizzeria" },
});
const mixItIceCream = await Restaurant.findOne({
  where: { name: "Mix-It-Up Ice Cream Shop" },
});
const suttersFunnel = await Restaurant.findOne({
  where: { name: "Sutter's Funnel Cake" },
});
const suttersPizza = await Restaurant.findOne({
  where: { name: "Sutter's Pizza" },
});
const suttersGrill = await Restaurant.findOne({
  where: { name: "Sutter's Grill" },
});
const onAStick = await Restaurant.findOne({
  where: { name: "Strictly-On-A-Stick" },
});
const pemmicanPickle = await Restaurant.findOne({
  where: { name: "Pemmican Pickle" },
});
const panda = await Restaurant.findOne({ where: { name: "Panda Express" } });
const minersMac = await Restaurant.findOne({
  where: { name: "Miner's Mac & Spuds" },
});
const logRideIcee = await Restaurant.findOne({
  where: { name: "Log Ride ICEE Mix-It-Up" },
});
const logRideFunnel = await Restaurant.findOne({
  where: { name: "Log Ride Funnel Cake" },
});
const gourmetChurro = await Restaurant.findOne({
  where: { name: "Gourmet Churro Factory" },
});
const ghostTownGrub = await Restaurant.findOne({
  where: { name: "Ghost Town Grub" },
});
const ghostTownGrill = await Restaurant.findOne({
  where: { name: "Ghost Town Grill" },
});
const ghostTownBakery = await Restaurant.findOne({
  where: { name: "Ghost Town Bakery & Coffee Shop" },
});
const calicoSaloon = await Restaurant.findOne({
  where: { name: "Calico Saloon" },
});
const calicoTaterBites = await Restaurant.findOne({
  where: { name: "Calico Tater Bites" },
});
const firemansBBQ = await Restaurant.findOne({
  where: { name: "Fireman's Brigade BBQ" },
});
const wildernessBroiler = await Restaurant.findOne({
  where: { name: "Wilderness Broiler" },
});
const wildernessRefresh = await Restaurant.findOne({
  where: { name: "Wilderness Refresh" },
});

await americanCuisine.addRestaurants([
  grizzlyCreek,
  caveInn,
  johnnyRockets,
  boardwalkBBQ,
  boardwalkPretzels,
  coastersDiner,
  propShopPizza,
  suttersGrill,
  suttersPizza,
  onAStick,
  pemmicanPickle,
  minersMac,
  ghostTownGrub,
  ghostTownGrill,
  calicoTaterBites,
  firemansBBQ,
  wildernessBroiler,
]);
await southernCuisine.addRestaurants([
  boardwalkBBQ,
  minersMac,
  calicoTaterBites,
  firemansBBQ,
  wildernessBroiler,
]);
await mexicanCuisine.addRestaurants([
  bajaTaqueria,
  cantinaDelSur,
  papasMexicans,
  casaCalifornia,
  oaxacaJoes,
]);
await italianCuisine.addRestaurants([suttersPizza, propShopPizza]);
await dessertCuisine.addRestaurants([
  SBDots,
  SSDots,
  charlestonCoffee,
  mixItIceCream,
  suttersFunnel,
  onAStick,
  logRideFunnel,
  logRideIcee,
  gourmetChurro,
  ghostTownBakery,
]);
await asianCuisine.addRestaurants([panda]);
await coffeeCuisine.addRestaurants([charlestonCoffee]);
await alcoholCuisine.addRestaurants([cantinaDelSur, calicoSaloon]);

console.log("Connected restaurants + cuisines");

// Connect MealTypes with Restaurants
await breakfast.addRestaurants([grizzlyCreek, ghostTownBakery]);
await lunch.addRestaurants([
  grizzlyCreek,
  bajaTaqueria,
  papasMexicans,
  casaCalifornia,
  johnnyRockets,
  boardwalkBBQ,
  coastersDiner,
  propShopPizza,
  suttersGrill,
  suttersPizza,
  panda,
  minersMac,
  ghostTownGrill,
  calicoTaterBites,
  firemansBBQ,
  wildernessBroiler,
]);
await dinner.addRestaurants([
  grizzlyCreek,
  bajaTaqueria,
  papasMexicans,
  casaCalifornia,
  johnnyRockets,
  boardwalkBBQ,
  coastersDiner,
  propShopPizza,
  suttersGrill,
  suttersPizza,
  panda,
  minersMac,
  ghostTownGrill,
  calicoTaterBites,
  firemansBBQ,
  wildernessBroiler,
]);
await snack.addRestaurants([
  snoopyRefresh,
  caveInn,
  fiestaRefresh,
  cantinaDelSur,
  papasMexicans,
  oaxacaJoes,
  onAStick,
  boardwalkPretzels,
  charlestonCoffee,
  memoryLaneRefresh,
  pemmicanPickle,
  minersMac,
  logRideFunnel,
  logRideIcee,
  ghostTownGrub,
  calicoSaloon,
  calicoTaterBites,
  wildernessBroiler,
  wildernessRefresh,
]);
await dessert.addRestaurants([
  SBDots,
  SSDots,
  charlestonCoffee,
  mixItIceCream,
  suttersFunnel,
  onAStick,
  logRideFunnel,
  logRideIcee,
  gourmetChurro,
  ghostTownGrub,
]);

console.log("Connected MealTypes with Restaurants");

console.log("Finished seeding database. Goodbye");








await db.close();
