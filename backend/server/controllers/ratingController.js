import { User, Restaurant, Rating, db } from "../../database/model.js";

const ratingHandlers = {
  getUserRatings: async (req, res) => {
    const { userId } = req.params;

    const ratings = await Rating.findAll({
      where: {
        userId: userId,
      },
    });

    res.status(200).send({
      message: "Here's your ratings",
      ratings: ratings,
    });
  },

  getUserRatingOfRestaurant: async (req, res) => {
    const { userId, restaurantId } = req.params();

    const userRating = await Rating.findOne({
      where: {
        userId,
        restaurantId,
      },
    });

    if (userRating) {
      res.status(200).send({
        message: `User ${userId}'s rating of Restaurant ${restaurantId}`,
        rating: userRating,
      });
    } else {
      res.status(400).send({
        message: `No rating found from User ${userId} for Restaurant ${restaurantId}`,
        rating: null,
      });
    }
  },

  createRating: async (req, res) => {
    const { stars, review } = req.body;
    const { restaurantId } = req.params;

    if (
      await Rating.findOne({
        where: [
          { user_id: req.session.userId },
          { restaurant_id: restaurantId },
        ],
      })
    ) {
      res.status(400).send({
        message: "You have already rated this restaurant",
      });
      return;
    }

    const rating = await Rating.create({
      userId: req.session.userId,
      restaurantId: restaurantId,
      stars: stars,
      review: review,
    });

    const restaurantRatings = await Rating.findAll({
      where: {
        restaurantId: restaurantId
      }
    })

    res.status(200).send({
      message: "Rating created",
      rating: rating,
      restaurantRatings: restaurantRatings
    });
    return;
  },

  updateRating: async (req, res) => {
    const { stars, review } = req.body;
    const rating = await Rating.findByPk(req.params.ratingId);

    console.log(stars);
    console.log(review);

    await rating.update({
      stars,
      review,
    });

    res.status(200).send({
      message: "Rating updated",
      rating: rating,
    });
  },

  deleteRating: async (req, res) => {
    const rating = await Rating.findByPk(req.params.ratingId);

    if (req.session.adminId) {
      await rating.destroy();

      res.status(200).send({
        message: "Rating deleted",
      });
      return;
    }

    if (!req.session.userId) {
      res.status(401).send({
        message: "You must be logged in to do that",
      });
      return;
    }

    if (rating.userId !== +req.session.userId) {
      res.status(401).send({
        message: "You cannot delete a rating that is not yours",
      });
      return;
    }

    await rating.destroy();

    res.status(200).send({
      message: "Rating deleted",
    });
  },
};

export default ratingHandlers;
