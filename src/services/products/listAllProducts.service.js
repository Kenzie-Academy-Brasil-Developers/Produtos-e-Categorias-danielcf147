import { database } from "../../database";

const listAllProductsService = async () => {
  const listAllProducts = await database.query("SELECT * FROM products");
  return listAllProducts.rows;
};
export default listAllProductsService;
