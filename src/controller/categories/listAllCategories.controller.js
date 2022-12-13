import listAllCategoriesService from "../../services/categories/listAllCategories.service";

const listAllCategoriesController = async (request, response) => {
  const data = await listAllCategoriesService();
  return response.status(200).json(data);
};

export default listAllCategoriesController;
