import { database } from "../database";

const ensureUuidIsValid = async (request, response, next) => {
  const validatedId = request.params;
  const regexOnlyUUID =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(
      validatedId.id
    );

  if (regexOnlyUUID === false) {
    return response.status(404).json({ message: "Invalid ID" });
  }
  next();
};
export default ensureUuidIsValid;
