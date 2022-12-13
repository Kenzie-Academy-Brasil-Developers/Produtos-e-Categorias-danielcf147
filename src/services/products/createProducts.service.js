import { database } from "../../database";
import { AppError } from "../../errors";

const createProductsService = async (userData) => {
  const { name, price, category_id } = userData;
  if (category_id === undefined) {
    const createProducts = await database.query(
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *;",
      [name, price]
    );
    return createProducts.rows[0];
  } else {
    const verifyCategory = await database.query(
      `SELECT * FROM categories WHERE id = ${category_id}`
    );
    if (verifyCategory.rows[0] === undefined) {
      throw new AppError("Category not found", 401);
    }
    const createProducts = await database.query(
      "INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3) RETURNING *;",
      [name, price, category_id]
    );
    return createProducts.rows[0];
  }
};

export default createProductsService;
