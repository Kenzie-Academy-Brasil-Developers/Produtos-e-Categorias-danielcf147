import listCategoryService from "../../services/categories/listCategory.service";

const listCategoryController = async (request, response) => {
  const data = await listCategoryService(request.params);
  return response.status(200).json(data);
};

export default listCategoryController;
