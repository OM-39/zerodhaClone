import { model } from "mongoose";
import UsersSchema from "../schemas/UsersSchema.js";

const UsersModel = new model("user", UsersSchema);

export default UsersModel;