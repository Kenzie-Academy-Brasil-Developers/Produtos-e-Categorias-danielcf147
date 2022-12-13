import { database } from "../database";

const ensureIDIsValidMiddleware = async (request, response, next) => {
  const validatedId = request.params;
  const regexOnlyNumbers = /^\d+$/.test(validatedId.id);

  if (regexOnlyNumbers === false) {
    return response.status(404).json({ message: "Invalid ID" });
  }
  next();
};
export default ensureIDIsValidMiddleware;
