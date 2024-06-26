const AbstractRepository = require("./AbstractRepository");

class ExcusesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "excuses" as configuration
    super({ table: "excuses" });
  }

  // The C of CRUD - Create operation

  async create(excuses) {
    // Execute the SQL INSERT query to add a new excuses to the "excuses" table
    const [result] = await this.database.query(
      `insert into ${this.table} (users_id, categories_id, title, description) values (?, ?, ?, ?)`,
      [
        excuses.users_id,
        excuses.categories_id,
        excuses.title,
        excuses.description,
      ]
    );

    // Return the ID of the newly inserted excuses
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific excuses by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the excuses
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all excuses from the "excuses" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of excuses
    return rows;
  }

  // The U of CRUD - Update operation
  async update(excuses) {
    // Execute the SQL UPDATE query to update a specific excuses
    const [result] = await this.database.query(
      `update ${this.table} set users_id = ?, categories_id = ?, title = ?, description = ? where id = ?`,
      [
        excuses.users_id,
        excuses.categories_id,
        excuses.title,
        excuses.description,
        excuses.id,
      ]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to delete a specific excuses
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = ExcusesRepository;
