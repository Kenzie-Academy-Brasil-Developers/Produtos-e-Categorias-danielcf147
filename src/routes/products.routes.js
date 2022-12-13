import { Router } from "express";

import createProductsController from "../controller/products/createProducts.controller";
import deleteProductController from "../controller/products/deleteProduct.controller";
import listAllProductsController from "../controller/products/listAllProducts.controller";
import listProductController from "../controller/products/listProduct.controller";
import returnDataProductController from "../controller/products/returnDataProduct.controller";
import updateProductController from "../controller/products/updateProduct.controller";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares";
import ensureIDIsValidMiddleware from "../middlewares/ensureIDIsValid.middleware";
import ensureUuidIsValid from "../middlewares/ensureUuidIsValid.middleware";
import { createProductsSchema } from "../schemas/products.schemas";
import { updateProductSchema } from "../schemas/products.schemas";

const router = Router();

router.post(
  "",
  ensureDataIsValidMiddleware(createProductsSchema),
  createProductsController
);
router.get("", listAllProductsController);
router.get("/:id", ensureUuidIsValid, listProductController);
router.get(
  "/category/:id",
  ensureIDIsValidMiddleware,
  returnDataProductController
);
router.patch(
  "/:id",
  ensureUuidIsValid,
  ensureDataIsValidMiddleware(updateProductSchema),
  updateProductController
);
router.delete("/:id", ensureUuidIsValid, deleteProductController);

export default router;
