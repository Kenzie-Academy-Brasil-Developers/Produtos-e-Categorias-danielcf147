import listProductService from "../../services/products/listProduct.service";

const listProductController = async (request, response) => {
  const data = await listProductService(request.params);
  return response.status(200).json(data);
};

export default listProductController;
