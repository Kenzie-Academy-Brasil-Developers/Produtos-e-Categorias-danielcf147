import * as yup from "yup";
import { uuidV4 } from "uuid";
const createProductsSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.number().notRequired(),
});

const updateProductSchema = yup.object().shape({
  name: yup.string().notRequired(),
  price: yup.number().notRequired(),
  category_id: yup.number().notRequired(),
});

export { createProductsSchema, updateProductSchema };
