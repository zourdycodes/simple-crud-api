import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const users = [
  {
    firstName: "Alexa",
    lastName: "Jade",
    age: 21,
    occupation: "Software Engineer",
  },
  {
    firstName: "Cory",
    lastName: "Chase",
    age: 21,
    occupation: "Adult Actress",
  },
  {
    firstName: "Shai",
    lastName: "Lienden",
    age: 21,
    occupation: "Data Scientist",
  },
  {
    firstName: "Sabina",
    lastName: "Altenbekova",
    age: 21,
    occupation: "Microbiologist",
  },
];

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
