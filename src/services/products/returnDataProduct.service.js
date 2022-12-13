import { database } from "../../database";
import { AppError } from "../../errors";

const returnDataProductService = async (id) => {
  const verifyId = await database.query(
    `SELECT * FROM categories WHERE id = '${id}'`
  );

  if (verifyId.rows[0] === undefined) {
    throw new AppError("Product not found", 401);
  }
  const returnDataProduct = await database.query(
    `SELECT categories.name AS category, products.name, products.price 
     FROM categories JOIN products ON categories.id = products.category_id WHERE categories.id = '${id}';`
  );
  return returnDataProduct.rows;
};
export default returnDataProductService;
