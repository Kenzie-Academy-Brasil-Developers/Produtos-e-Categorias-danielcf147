import { database } from "../../database";
import { AppError } from "../../errors";

const createCategoriesService = async (userData) => {
  const searchDatabase = await database.query(
    `SELECT
              *
          FROM
              categories
          WHERE 
              name = $1`,
    [userData.name]
  );

  if (searchDatabase.rowCount > 0) {
    throw new AppError("Product already exists", 400);
  }

  const queryResponse = await database.query(
    `INSERT INTO
              categories (name)
          VALUES
              ($1)
          RETURNING *`,
    [userData.name]
  );
  return queryResponse.rows[0];
};

export default createCategoriesService;
