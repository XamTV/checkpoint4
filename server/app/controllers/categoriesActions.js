// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all categories from the database
    const categories = await tables.categories.readAll();

    // Respond with the categories in JSON format
    res.json(categories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific categories from the database based on the provided ID
    const categories = await tables.categories.read(req.params.id);

    // If the categories is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the categories in JSON format
    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.json(categories);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the categories data from the request body
  const categories = req.body;

  try {
    // Insert the categories into the database
    const insertId = await tables.categories.create(categories);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted categories
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
