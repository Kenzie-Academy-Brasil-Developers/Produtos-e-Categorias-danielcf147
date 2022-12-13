import { Router } from "express";

import createCategoriesController from "../controller/categories/createCategories.controller";
import deleteCategoryController from "../controller/categories/deleteCategory.controller";
import listAllCategoriesController from "../controller/categories/listAllCategories.controller";
import listCategoryController from "../controller/categories/listCategory.controller";
import updateCategoryController from "../controller/categories/updateCategory.controller";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import ensureIDIsValidMiddleware from "../middlewares/ensureIDIsValid.middleware";
import { createCategoriesSchema } from "../schemas/categories.schemas";
import { updateCategoriesSchema } from "../schemas/categories.schemas";

const router = Router();

router.post(
  "",
  ensureDataIsValidMiddleware(createCategoriesSchema),
  createCategoriesController
);
router.get("", listAllCategoriesController);
router.get("/:id", ensureIDIsValidMiddleware, listCategoryController);
router.patch(
  "/:id",
  ensureIDIsValidMiddleware,
  ensureDataIsValidMiddleware(updateCategoriesSchema),
  updateCategoryController
);
router.delete("/:id", ensureIDIsValidMiddleware, deleteCategoryController);

export default router;
