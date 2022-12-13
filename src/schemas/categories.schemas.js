import * as yup from "yup";

const createCategoriesSchema = yup.object().shape({
  name: yup.string().required(),
});

const updateCategoriesSchema = yup.object().shape({
  name: yup.string().required(),
});

export { createCategoriesSchema, updateCategoriesSchema };
