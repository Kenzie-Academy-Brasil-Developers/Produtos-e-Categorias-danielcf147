import createProductsService from "../../services/products/createProducts.service";

const createProductsController = async (request, response) => {
  const data = await createProductsService(request.body);
  return response.status(201).json(data);
};
export default createProductsController;
