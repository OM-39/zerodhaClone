import { Schema } from "mongoose";
import bcrypt from "bcrypt";
const UsersSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

UsersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

export default UsersSchema;