import { database } from "../../database";
import { AppError } from "../../errors";

const listProductService = async (data) => {
  const listProduct = await database.query(
    `SELECT * FROM products WHERE id = '${data.id}'`
  );

  if (listProduct.rows[0] === undefined) {
    throw new AppError("Product not found", 404);
  }
  return listProduct.rows[0];
};
export default listProductService;
