import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { name } = request.body;
  const idObject = request.params;
  const category = await updateCategoryService(name, idObject.id);
  return response.status(200).json(category);
};

export default updateCategoryController;
