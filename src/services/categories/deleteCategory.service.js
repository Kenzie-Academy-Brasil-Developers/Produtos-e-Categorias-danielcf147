import { database } from "../../database";
import { AppError } from "../../errors";

const deleteCategoryService = async (id) => {
  const verifyId = await database.query(
    `SELECT * FROM categories WHERE id = '${id}'`
  );

  if (verifyId.rows[0] == undefined) {
    throw new AppError("Category not found", 401);
  }

  const deleteCategory = await database.query(
    `DELETE FROM categories WHERE id = $1 RETURNING *`,
    [id]
  );

  return deleteCategory.rows[0];
};
export default deleteCategoryService;
