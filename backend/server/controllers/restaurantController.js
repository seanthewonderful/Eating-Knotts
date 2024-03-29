import {
  Restaurant,
  User,
  Rating,
  Land,
  MealType,
  Cuisine,
} from "../../database/model.js";
import { Op, Sequelize } from "sequelize";

const restaurantHandlers = {
  getAllRestaurants: async (req, res) => {
    const allRestaurants = await Restaurant.findAll({
      include: [
        {
          model: Rating,
          include: {
            model: User,
          },
        },
        {
          model: Land,
        },
        {
          model: Cuisine,
        },
        {
          model: MealType,
        },
      ],
    });

    res.status(200).send({
      message:
        "All restaurants eager loaded with Land, and eager with ratings which eager loads with user",
      restaurants: allRestaurants,
    });
  },

  getRestaurantsByLand: async (req, res) => {
    const { landName } = req.params;

    const landWithRestaurants = await Land.findOne({
      where: {
        name: landName,
      },
      include: {
        model: Restaurant,
        include: [
          {
            model: Rating,
          },
          {
            model: Cuisine,
          },
          {
            model: MealType,
          },
        ],
      },
    });

    res.status(200).send({
      message: `Here are all the restaurants in ${landWithRestaurants.name}`,
      landWithRestaurants,
    });
  },

  getRestaurantsByCuisine: async (req, res) => {
    const { cuisineName } = req.params;

    const cuisineWithRestaurants = await Cuisine.findOne({
      where: {
        name: cuisineName,
      },
      include: {
        model: Restaurant,
        include: [
          {
            model: Rating,
          },
          {
            model: Cuisine,
          },
          {
            model: MealType,
          },
        ],
      },
    });

    res.status(200).send({
      message: `Here are all the ${cuisineName} restaurants`,
      cuisineWithRestaurants,
    });
  },

  getRestaurantsByMealType: async (req, res) => {
    const { mealTypeName } = req.params;

    const mealTypeWithRestaurants = await MealType.findOne({
      where: {
        name: mealTypeName,
      },
      include: {
        model: Restaurant,
        include: [
          {
            model: Rating,
          },
          {
            model: Cuisine,
          },
          {
            model: MealType,
          },
        ],
      },
    });

    res.status(200).send({
      message: `Here are all the ${mealTypeName} restaurants`,
      mealTypeWithRestaurants,
    });
  },

  getRestaurantsByName: async (req, res) => {
    const { restName } = req.query;

    const restaurants = await Restaurant.findAll({
      where: {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          "LIKE",
          `%${restName.toLowerCase()}%`
        ),
      },
      include: [
        {
          model: Rating,
        },
        {
          model: Cuisine,
        },
        {
          model: MealType,
        },
      ],
    });

    res.status(200).send({
      message: "Matching restaurants:",
      restaurant: restaurants,
    });
  },

  getRestaurantById: async (req, res) => {
    const { restaurantId } = req.params;

    const restaurant = await Restaurant.findByPk(restaurantId, {
      include: [
        {
          model: Land,
        },
        {
          model: Rating,
        },
        {
          model: Cuisine,
        },
        {
          model: MealType,
        },
      ],
    });

    res.status(200).send({
      message: "Restaurant found",
      restaurant: restaurant,
    });
  },

  createRestaurant: async (req, res) => {
    if (!req.session.adminId) {
      res.status(401).send({
        message: "You must be logged in as an admin to do this",
      });
    }

    const {
      name,
      expense,
      img,
      description,
      fullService,
      refills,
      xCoord,
      yCoord,
    } = req.body;

    if (await Restaurant.findOne({ where: { name } })) {
      res.status(400).send({
        message: "There is already a restaurant with that name",
        restaurant: null,
      });
      return;
    }

    const newRestaurant = await Restaurant.create({
      name,
      expense,
      img,
      description,
      fullService,
      refills,
      xCoord: +xCoord,
      yCoord: +yCoord,
    });

    res.status(200).send({
      message: "Restaurant created",
      restaurant: newRestaurant,
    });
  },

  updateRestaurant: async (req, res) => {
    if (!req.session.adminId) {
      res.status(401).send({
        message: "You must be logged in as an admin to do that",
      });
    }

    const {
      name,
      expense,
      img,
      description,
      fullService,
      refills,
      xCoord,
      yCoord,
    } = req.body;

    const restaurant = await Restaurant.findByPk(req.params.restaurantId);

    await restaurant.update({
      name: name ?? restaurant.name,
      expense: expense ?? restaurant.expense,
      img: img ?? restaurant.img,
      description: description ?? restaurant.description,
      fullService: fullService ?? restaurant.fullService,
      refills: refills,
      xCoord: +xCoord,
      yCoord: +yCoord,
    });

    res.status(200).send({
      message: "Restaurant details updated",
      restaurant: restaurant,
    });
  },

  deleteRestaurant: async (req, res) => {
    if (!req.session.adminId) {
      res.status(401).send({
        message: "You must be logged in as an admin to do that",
      });
    }

    const restaurant = await Restaurant.findByPk(req.params.restaurantId);

    await restaurant.destroy();

    res.status(200).send({
      message: "Restaurant deleted",
    });
  },
};

export default restaurantHandlers;
