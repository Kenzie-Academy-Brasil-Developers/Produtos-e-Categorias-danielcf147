import createCategoriesService from "../../services/categories/createCategories.service";

const createCategoriesController = async (request, response) => {
  const data = await createCategoriesService(request.body);
  return response.status(201).json(data);
};

export default createCategoriesController;
