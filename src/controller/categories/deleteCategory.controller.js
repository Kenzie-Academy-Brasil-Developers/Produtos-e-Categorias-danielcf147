import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
  const idObject = request.params;
  const deletedCategory = await deleteCategoryService(idObject.id);
  return response.status(204).json(deletedCategory);
};

export default deleteCategoryController;
