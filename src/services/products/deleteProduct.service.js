import { database } from "../../database";
import { AppError } from "../../errors";

const deleteProductService = async (idObject) => {
  const verifyId = await database.query(
    `SELECT * FROM products WHERE id = '${idObject}'`
  );

  if (verifyId.rows[0] == undefined) {
    throw new AppError("Category not found", 401);
  }

  const deleteCategory = await database.query(
    `DELETE FROM products WHERE id = $1 RETURNING *`,
    [idObject]
  );

  return deleteCategory.rows[0];
  // console.log(idObject);
  // const verifyId = await database.query(
  //   `SELECT * FROM products WHERE id = '${idObject.id}'`
  // );
  // console.log(verifyId.rows[0]);
  // if (verifyId.rows[0] === undefined) {
  //   console.log("não deletou");
  //   throw new AppError("Product not found", 401);
  // }
  // // const deleteProduct = await database.query(
  // //   `DELETE FROM products WHERE id = '${idObject.id}' RETURNING *`
  // // );
  // // return deleteProduct.rows[0];
};
export default deleteProductService;
