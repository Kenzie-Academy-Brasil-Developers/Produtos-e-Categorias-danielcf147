import { database } from "../../database";
import { AppError } from "../../errors";

const updateProductService = async (updateData, id) => {
  const { name, price, category_id } = updateData;

  const verifyId = await database.query(
    `SELECT * FROM products WHERE id = '${id}'`
  );

  if (verifyId.rows[0] === undefined) {
    throw new AppError("Product not found", 401);
  }

  let query = "UPDATE products SET ";
  const keys = Object.keys(updateData);
  const values = Object.values(updateData);

  keys.forEach((keys, index) => {
    query += `${keys} = \$${(index += 1)}, `;
  });
  query = query.slice(0, -2);
  query += ` WHERE id = \$${keys.length + 1} RETURNING *;`;

  const updateProduct = await database.query(query, [...values, id]);
  return updateProduct.rows[0];
};
export default updateProductService;
