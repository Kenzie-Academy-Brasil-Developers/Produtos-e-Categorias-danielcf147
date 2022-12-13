import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
  const idObject = request.params;
  const data = await updateProductService(request.body, idObject.id);
  return response.status(200).json(data);
};

export default updateProductController;
