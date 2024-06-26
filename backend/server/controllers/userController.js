import { User, Restaurant, Rating } from "../../database/model.js";
import bcryptjs from "bcryptjs";

const userHandlers = {
  getUserById: async (req, res) => {
    const user = await User.findByPk(req.params.userId, {
      include: {
        model: Rating,
        include: {
          model: Restaurant,
        },
      },
    });

    if (!user) {
      res.status(400).send({
        message: "Not found",
        user: null,
      });
    } else {
      res.status(200).send({
        message: "User found",
        user: user,
      });
    }
  },

  getUserByUsername: async (req, res) => {
    const { username } = req.params;

    const user = await User.findOne({
      where: {
        username: username,
      },
      include: [
        {
          model: Rating,
          include: {
            model: Restaurant,
          },
        },
      ],
    });

    if (!user) {
      res.status(400).send({
        message: "No user found",
        user: null,
      });
    } else {
      res.status(200).send({
        message: "User found",
        user: user,
      });
    }
  },

  createUser: async (req, res) => {
    const { username, password, email, name, img } = req.body;

    if (await User.findOne({ where: { username } })) {
      res.status(400).send({
        message: "Username already in use",
        userId: null,
      });
      return;
    } else if (await User.findOne({ where: { email } })) {
      res.status(400).send({
        message: "Email address already in use",
        userId: null,
      });
      return;
    }

    await User.create({
      username: username.toLowerCase(),
      password,
      email,
      firstName: name.fName.toLowerCase(),
      lastName: name.lName.toLowerCase(),
      img,
    });

    if (req.session.adminId) {
      res.status(200).send({
        message: "New user created successfully",
      });
      return;
    }

    const user = await User.findOne({
      where: {
        username,
      },
      include: {
        model: Rating,
        include: {
          model: Restaurant,
        },
      },
    });

    req.session.userId = user.userId;

    res.status(200).send({
      message: "User created and logged in",
      userId: user.userId,
      user: user,
    });
  },

  updateUser: async (req, res) => {
    if (!req.session.userId) {
      res.status(401).send({
        message: "You must be logged in to do this",
      });
      return;
    }

    const { email, firstName, lastName, img } = req.body;

    const user = await User.findByPk(req.session.userId, {
      include: {
        model: Rating,
        include: {
          model: Restaurant,
        },
      },
    });

    if (user.email !== email) {
      if (await User.findOne({ where: { email } })) {
        res.status(401).send({
          message: "Email already in use",
        });
        return;
      }
    }

    await user.update({
      email: email ?? user.email,
      firstName: firstName ?? user.firstName,
      lastName: lastName ?? user.lastName,
      img: img ?? user.img,
    });

    res.status(200).send({
      message: "User details updated",
      user: user,
    });
  },

  adminUpdateUser: async (req, res) => {
    if (!req.session.adminId) {
      res.status(401).send({
        message: "You must be logged in to do this",
      });
      return;
    }

    const { userId } = req.params;
    const { username, email, firstName, lastName, img } = req.body;

    const existingUser = await User.findByPk(userId);

    if (existingUser.email !== email) {
      if (await User.findOne({ where: { email } })) {
        res.status(401).send({
          message: "New email already in use",
        });
        return;
      }
    }

    await existingUser.update({
      username: username ?? existingUser.username,
      email: email ?? existingUser.email,
      firstName: firstName ?? existingUser.firstName,
      lastName: lastName ?? existingUser.lastName,
      img: img ?? existingUser.img,
    });

    res.status(200).send({
      message: "User details updated",
      user: existingUser,
    });
  },

  updateUserPassword: async (req, res) => {
    if (!req.session.userId) {
      res.status(401).send({
        message: "You must be logged in to do this",
      });
      return;
    }

    const user = await User.scope("withPassword").findByPk(req.session.userId);

    const { oldPassword, newPassword } = req.body;

    if (!bcryptjs.compareSync(oldPassword, user.password)) {
      res.status(401).send({
        message: "Current password incorrect",
      });
      return;
    }

    const hashedPassword = bcryptjs.hashSync(
      newPassword,
      bcryptjs.genSaltSync(5)
    );

    await user.update({
      password: hashedPassword,
    });

    res.status(200).send({
      message: "Hey, nice new password. I bet no one will crack it this time!",
    });
  },

  deleteUser: async (req, res) => {
    if (req.session.adminId) {
      const user = await User.findByPk(req.params.userId);

      await user.destroy();

      res.status(200).send({
        message: "User deleted and logged out",
      });
      return;
    }

    if (!req.session.userId) {
      res.status(401).send({
        message: "You must be logged in to do this",
      });
      return;
    }

    const user = await User.findByPk(req.params.userId);

    const { password } = req.body;

    if (!bcryptjs.compareSync(password, user.password)) {
      res.status(401).send({
        message: "Password incorrect",
      });
      return;
    }

    await user.destroy();
    req.session.userId = null;

    res.status(200).send({
      message: "User deleted and logged out",
    });
  },
};

export default userHandlers;
