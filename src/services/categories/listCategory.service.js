import { database } from "../../database";
import { AppError } from "../../errors";

const listCategoryService = async (data) => {
  const queryResponse = await database.query(
    `
        SELECT
            *
        FROM 
            categories
        WHERE
            id = $1
        `,
    [data.id]
  );

  if (queryResponse.rows[0] === undefined) {
    throw new AppError("Category not found", 404);
  }

  return queryResponse.rows[0];
};
export default listCategoryService;
