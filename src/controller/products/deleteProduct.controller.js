import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (request, response) => {
  const idObject = request.params;
  const data = await deleteProductService(idObject.id);
  return response.status(204).json(data);
};

export default deleteProductController;
