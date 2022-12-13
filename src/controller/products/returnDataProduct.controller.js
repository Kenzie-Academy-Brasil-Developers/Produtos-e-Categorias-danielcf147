import returnDataProductService from "../../services/products/returnDataProduct.service";

const returnDataProductController = async (request, response) => {
  const objectId = request.params;
  const data = await returnDataProductService(objectId.id);
  return response.status(200).json(data);
};

export default returnDataProductController;
