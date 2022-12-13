import { database } from "../../database";

const listAllCategoriesService = async () => {
  const queryResponse = await database.query(
    ` SELECT
            categories.name
      FROM 
            categories`
  );

  return queryResponse.rows;
};

export default listAllCategoriesService;
