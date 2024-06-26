// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all excuses from the database
    const excuses = await tables.excuses.readAll();

    // Respond with the excuses in JSON format
    res.json(excuses);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific excuses from the database based on the provided ID
    const excuses = await tables.excuses.read(req.params.id);

    // If the excuses is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the excuses in JSON format
    if (excuses == null) {
      res.sendStatus(404);
    } else {
      res.json(excuses);
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
  // Extract the excuses data from the request body
  const excuses = req.body;

  try {
    // Insert the excuses into the database
    const insertId = await tables.excuses.create(excuses);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted excuses
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
