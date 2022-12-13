import { database } from "../../database";
import { AppError } from "../../errors";

const updateCategoryService = async (name, id) => {
  const verifyId = await database.query(
    `SELECT * FROM categories WHERE id = '${id}'`
  );

  if (verifyId.rows[0] === undefined) {
    throw new AppError("Category not found", 404);
  }

  const updateCategory = await database.query(
    `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *`,
    [name, id]
  );
  return updateCategory.rows[0];
};
export default updateCategoryService;
