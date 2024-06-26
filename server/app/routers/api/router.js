const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const categoriesRouter = require("./categories/CategoriesRouter");

router.use("/categories", categoriesRouter);

const usersRouter = require("./users/UsersRouter");

router.use("/users", usersRouter);

const excusesRouter = require("./excuses/ExcusesRouter");

router.use("/excuses", excusesRouter);

/* ************************************************************************* */

module.exports = router;
